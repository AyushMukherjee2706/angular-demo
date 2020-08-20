import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email = "eve.holt@reqres.in";
  password = "cityslicka";
  return: string = '';

  constructor(
    private api: AuthService,
    private user: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the query params
    this.route.queryParams.subscribe(
      (params) => (this.return = params["return"] || "/")
    );
  }

  tryLogin() {
    this.api.login(this.email, this.password).subscribe(
      (r) => { // response of api
        if (r.token) {
          this.user.setToken(r.token);// token is setting up for user
          this.router.navigateByUrl(this.return); // returning the url path to login
        }
      },
      (r) => {
        alert(r.error.error);
      }
    );
  }
}
