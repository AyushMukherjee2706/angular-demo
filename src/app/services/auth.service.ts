import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { LoginResultModel } from "../models/login-result.model"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

}
