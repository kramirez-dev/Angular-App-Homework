import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Login } from "../shared/models/login";
import { TokenService } from "../shared/services/token/token.service";
import { LoginService } from "../shared/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(10)]]
    });

    this.logOut();
  }

  notExist=false;

  logOut(){
    localStorage.removeItem('token')
    this._router.navigate(['/index'])

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._loginService.login(loginObject).subscribe(response => {
        this._tokenService.setActiveToken(response.token);
        this._router.navigateByUrl("users");
      });
      this.notExist=false;
    } else {
      this.notExist=true;
    }
  }
}
