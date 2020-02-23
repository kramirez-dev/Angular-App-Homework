import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import {User} from '../shared/models/User';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class UsersComponent implements OnInit {

  private userlist:User;
  private _user:User;

  constructor(private _userService:UserService) { this.getUserList(); }

  check=false;
  checkUserlist=false;

  ngOnInit() {
    this.getUserList();
    this.userlist= new User();
  }

  getUserList(){
    this._userService.getUsers()
    .subscribe((response)=>(this._user=response.data));

}

nextPage(id){
  id=id+1;
  this._userService.nextPage(id)
    .subscribe((response)=>(this._user=response.data));
}

 getUserById(id:number){
   this._userService.getUserById(id)
   .subscribe((response)=>(this.userlist=response.data));
   this.checkUserlist = true }



getValue(){
  if(this.check===true){
    this.check=false;
  }else{
    this.check=true;
  }
 
}


}
