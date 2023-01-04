import { Component ,OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../Services/Users/user.service';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-nouveau-user',
  templateUrl: './nouveau-user.component.html',
  styleUrls: ['./nouveau-user.component.scss']
})
export class NouveauUserComponent implements OnInit {

  public email!:any;
  public registration_Form!: FormGroup;
public new_user: any;
  constructor(
    public afAuth: AngularFireAuth ,// Inject Firebase auth service
    public route : Router,
    private Form_B: FormBuilder, private service_user: UserService,
    private routeActive: ActivatedRoute) {

    this.registration_Form = this.Form_B.group({

      lastName: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.email= this.routeActive.snapshot.params["email"];
    console.log(this.routeActive.snapshot.params["email"]);
  }
  // inscription
  async registration_New_User() {
    try {
      this.new_user = {
        lastName: this.registration_Form.value.lastName,
        firstName: this.registration_Form.value.firstName,
        email: this.email,
        createDate:new Date,
        roles:['User'],
        liste_achat:[''],
        panier:[''],   
      }
      this.service_user.addUser(this.new_user);
      this.route.navigate(['']);
      //this.route.navigate(['/accueil_user/'+this.new_user]);

      } catch (error) {
        window.alert(error);
      }

        }

  

}

