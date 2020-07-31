import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Auth: any;

  constructor() { }

  ngOnInit() {
  }

  loginUser(event){  // made a method that we are passing in html form
    event.preventDefault() 
    // to prevent the default behaviour of page reloading. without this the page was loading
    // but again getting rolled back to login rather than accepting the values of username and password.
    const target = event.target
    //backend , to get the value of username and pass
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    // Inject the auth service, call user details func that we made in auth.ser
    this.Auth.getUserDetails(username,password).subscribe(data => {
      if(data.success){
        // redirect the person to admin 
      }else {
        window.alert(data.message)
      }
    })
    console.log(username,password)
  }

}
