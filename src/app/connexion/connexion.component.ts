import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../Services/Users/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent  implements OnInit{

  loginForm!: FormGroup;
  Verif_user : Boolean = true;

  constructor(public router: Router, private Form_B: FormBuilder, private users: UserService){}


ngOnInit(){

  this.loginForm = this.Form_B.group({ //instance de FORMGROUP
    email: [], //instance  de FROMBUILDER
    password: [], //instance  de FROMBUILDER
  })
}


login(){

  //METHODE APPELER LORD DU CLIC DU BUTTON "SUBMIT"
/*
  for(let i = 0; i< this.users.users.length;i++){

    if(this.users.users[i].email == this.loginForm.value.email){
      console.log('ok1');

        if(this.users.users[i].password == this.loginForm.value.password){
            console.log('ok2');

          this.router.navigate(['']);
        }

    }else {this.Verif_user = false , console.log('error');
     }
  }
  console.log('les données sont : ' + this.loginForm.value.email + ' ' +this.loginForm.value.password );
*/
}
}
