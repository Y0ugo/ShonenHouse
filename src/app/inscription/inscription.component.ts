import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../Services/Users/user.service';
import { User_model } from '../Model/User_model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent  implements OnInit{

public registration_Form!: FormGroup;

public new_user: any;

static verif_password(group: FormGroup){
  console.log(group)
  return group.get('password')?.value === group.get('check_password')?.value ? null : { passwordError: true };
}

  constructor(public router: Router, private Form_B: FormBuilder, private service_user: UserService){
    this.registration_Form = this.Form_B.group({

      lastName: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
      create_date: ['', [Validators.required]],
      passwordGroup: this.Form_B.group({
        password: ['', {validators: [Validators.required, Validators.maxLength(110), Validators.minLength(3)], updateOn: 'blur'}],
        check_password: ['', {validators: [Validators.required, Validators.maxLength(110), Validators.minLength(3)], updateOn: 'blur'}],
      }, {
        validator: InscriptionComponent.verif_password,
      }
      )
    })
  }

  ngOnInit() {}

  registration_New_User(){

    this.new_user = {
        this.registration_Form.value.lastName,
        this.registration_Form.value.firstName,
        this.registration_Form.value.email,
        this.registration_Form.value.password,
        this.registration_Form.value.create_date,
        'User',
        '',
    }

      this.service_user.addUser(this.new_user);

    this.router.navigate(['']);


  }

  public printLog(): void {
    console.log(this.registration_Form);
  }

}
