import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../Services/Users/user.service';
import { User_model } from '../Model/User_model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent  implements OnInit{

Registration_Form!: FormGroup;
public verif_pass!: Boolean;

  constructor(public router: Router, private Form_B: FormBuilder, private liste_user: UserService){

  }
  ngOnInit() {

    this.Registration_Form = this.Form_B.group({

      lastName:[],
      firstName:[],
      email:[],
      create_date:[],
      password:[],
      check_password:[],
    })
  }


  verif_password(){
    return this.Registration_Form.value.password == this.Registration_Form.value.check_password ? true : false;

  }


  registration_New_User(){

    this.verif_password();

    if(this.verif_password()){

      this.liste_user.Users.push(
        new User_model(
          this.Registration_Form.value.lastName,
          this.Registration_Form.value.firstName,
          this.Registration_Form.value.email,
          this.Registration_Form.value.password,
          this.Registration_Form.value.create_date,
          'User',
          '',
          )
      )
      this.verif_pass = true;
      console.log(this.liste_user.Users);

      this.router.navigate(['']);


    }else this.verif_pass = false;

    console.log(this.liste_user.Users);

  }

}
