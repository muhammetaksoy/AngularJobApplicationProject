import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }

  getUsers(){
    return this.http.get<any>(environment.user);
  }

  removeUser(id:number){
    return this.http.delete<any>(environment.user +"/"+id);
  }

  
}
