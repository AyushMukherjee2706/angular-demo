import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(username, password){

     //post these details to api server and return user info if correct.
     return this.http.post('http://localhost:8080/login',{
       username,
       password
     })//.subscribe(data => {console.log(data, "is what we got from the server ")// whenever some event occur. this subscription method would be called.
    //})
  }
}
