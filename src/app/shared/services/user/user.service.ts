import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constant}from '../../classes/Constant';
import { userRegister } from '../../models/UserRegister';
import { User } from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _htpp:HttpClient) { }

  getUsers():Observable<any>{
    return this._htpp.get(Constant.API+'/users?page=1');
  }

  nextPage(id:string):Observable<any>{
    return this._htpp.get(Constant.API+'/users?page='+id);
  }


  getUserById(id:number):Observable<any>{
    return this._htpp.get(Constant.API+'/users/'+id);
  }

getUserId(user:User):Observable<any>{
  return this._htpp.get(Constant.API+'/users/'+user.id);
}

registerUser(body:userRegister):Observable<any>{
  return this._htpp.post(Constant.API+'/users/',body,Constant.headers);
}

}
