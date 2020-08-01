import { Component } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  constructor(private userSerice: UserService){}
  
  isDisplay(){
      return this.userSerice.isLogged()
  }
}
