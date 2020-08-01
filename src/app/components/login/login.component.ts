import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  email = 'eve.holt@reqres.in'
  password = 'cityslicka';

  constructor(private api: AuthService, private user: UserService,  private router: Router) {
  }

  

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {   
            this.user.setToken(r.token)         
            this.router.navigateByUrl('');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}
