import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userSerice: UserService){}
  
  isDisplay(){
      return this.userSerice.isLogged()
  }

  ngOnInit() {
  }

}
