import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import {User} from '../shared/models/User';


@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrls: ['./get-user-by-id.component.css']
})
export class GetUserByIdComponent implements OnInit {

  constructor(private _userService:UserService,) { }

  private _user:User;
  ngOnInit() {
    this._user= new User();
  }
  notExist=false;
  checkUser=false;
  index='';

  getFalseList(){
    this.checkUser=false;
  }
    getUserByID(id:number){
      if(id > 12 || id < 1){
        this.notExist=true;
        this.checkUser=false;
      }else{
      this._userService.getUserById(id)
      .subscribe((response)=>(this._user=response.data));
      this.checkUser=true;
      this.notExist=false;
    }
  }
}
