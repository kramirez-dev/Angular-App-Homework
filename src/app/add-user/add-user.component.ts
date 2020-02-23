import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { userRegister } from '../shared/models/UserRegister';
import { UserService } from '../shared/services/user/user.service';
import { Router } from "@angular/router";
import { TokenService } from "../shared/services/token/token.service";
import { LoginService } from "../shared/services/login/login.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  loginForm: FormGroup;
  _userRegister:userRegister;

  constructor(  private _formBuilder: FormBuilder,
    private _userService:UserService,
    private _tokenService: TokenService,
    private _router: Router) { }

  ngOnInit() {
    this._userRegister=new userRegister();
    this.loginForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      job: ["", [Validators.required, Validators.minLength(4)]]
    });

    
  }

  incompleteFields=false;
  checkUserRegister=true;

  
  registerUser(){
    if (this.loginForm.valid) {
      const registerObject: userRegister = {
        name: this.loginForm.get("name").value,
        job: this.loginForm.get("job").value,
        
      };
      this._userService.registerUser(registerObject).subscribe(response => {
        this._userRegister=response;
        this.checkUserRegister=false;
      });
      this.incompleteFields=false;
    } else {
      this.incompleteFields=true;
    }

  }

  clearFields(){
    this.checkUserRegister=true;
  }
 

}