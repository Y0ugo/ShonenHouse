import { Injectable } from '@angular/core';
import { User_model } from 'src/app/Model/User_model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


public Users : User_model[] = [
  new User_model('dupont','jean','toto@gmail.com','123456',new Date ,['USER'],[]),
  new User_model('alain','pierre','pierre@gmail.com','azert',new Date ,['USER','ADMIN'],[]),
]
  constructor() { }
}
