import {User} from '../models/User'

export class UserList{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:[User];
}