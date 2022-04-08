import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseURL: string = environment.apiURL;
  private admin_api = this.baseURL + "admin/"

  constructor(private httpClient: HttpClient) { }
  
  get_users_and_group_data(user_id:string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.admin_api + 'get_users_and_group_data?id='+user_id)
        .subscribe(
          (response: any) => {
            if (response.statusCode == "200") {
              resolve(response.data);
            } else {
              reject("error");
              return;
            }
          },
          (err) => {
            console.log("error ------- ", err);
            reject(err);
            return;
          }
        );
    });
  }
}