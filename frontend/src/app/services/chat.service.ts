import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";



@Injectable({
  providedIn: 'root',
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  socket:any;

  constructor() {}
  socketConnection(id:string){
    this.socket = io('http://localhost:8008', {     
      query: {
        id:id
      }              
    });
  }

  public sendMessage(message:any, cb:any) {
    this.socket.emit('message', message, (data:any) => {
        cb(data)
    });
  }
  public joinRoom(roomId:any, cb:any) {
    this.socket.emit('joinRoom', roomId, (data:any) => {
        console.log("room joined ======= ")
        cb(data)
    });
  }

  public getNewMessage = () => {
    this.socket.on('message', (message:any) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
}