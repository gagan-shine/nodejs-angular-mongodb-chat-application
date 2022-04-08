import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Subscription } from 'rxjs'
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewChecked{
	@ViewChild('scrollMe') private myScrollContainer: ElementRef;
	private searchEventSubscription: Subscription;
	submitted=false;
	newMessage: any = {};
  	messageList: any = [];
	sender_id:string = ""
	receiver_id:string = ""
	room_id:string = "";
	chat_type:number = 0
	chat_user_group_name:string = ''
	data:any = {
		'usersList':[],
		'groupList':[]
	};
	auth:boolean=false;

	constructor(
		private APIService : APIService,
		private chatService: ChatService
	) {}

	ngOnInit(){
		this.messageList = [];
		this.fetch_data(this.sender_id);
		this.scrollToBottom();
    }

    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 
	scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }
	// ngOnDestroy(){}

	sendMessage(msg:any) {
		this.newMessage = {
			"senderId":this.sender_id,
			"text":msg.text,
			"chatType":this.chat_type==2 ? 2 : 1
		}  
		this.chat_type==2 ? this.newMessage.groupId=this.room_id : this.newMessage.receiverId=this.receiver_id; 
		this.chatService.sendMessage(this.newMessage, (data:any) =>{
			this.messageList.push(data);
		});
		this.newMessage.text = '';
	}
	selectSenderUser(event:any){
		this.sender_id = event.target.value;
		this.chatService.socketConnection(this.sender_id);
		this.searchEventSubscription = this.chatService.getNewMessage().subscribe((message: any) => {
			if(message && message.text){
				this.messageList.push(message);
			}
		})
		this.fetch_data(this.sender_id)
	}
	selectReceiverUser(user:any){
		this.room_id = '';
		this.newMessage.text = '';
		this.messageList = [];
		this.receiver_id = user._id;
	}
	joinRoom(roomId:string){
		this.receiver_id = "";
		this.newMessage.text = '';
		this.messageList = [];
		this.room_id = roomId;
		this.chatService.joinRoom(this.room_id, (data:any) =>{
			console.log("room joined")
		});
	}
  	fetch_data(id:string){
		this.APIService.get_users_and_group_data(id).then(response => {
			this.data = response;
		},err=>{
			
		});
	}
	logout(){
		this.searchEventSubscription.unsubscribe()
	}

}
