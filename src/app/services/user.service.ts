import { Injectable } from '@angular/core';

const TOKEN = null
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  token
  setToken(token: string): void {
    // localStorage.setItem(TOKEN, token);
    this.token = token;
  }

  isLogged() {
    // return localStorage.getItem(TOKEN) != null;
    return this.token != null
  }
}
