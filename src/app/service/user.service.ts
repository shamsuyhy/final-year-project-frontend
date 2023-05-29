import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL= "http://localhost:8080/users";

  constructor(private httpClient:HttpClient) {

   }
   getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
   }
   getUserbyUsername(username:string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${username}`);
   }

   creatUser(user: User):Observable<any>{
    return this.httpClient.post<User>(`${this.baseURL}/adduser`,user);
   }
   deleteUser(username:string):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${username}`);
   }
}
