import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth ,// Inject Firebase auth service
    public router : Router,
  ) {}
  // Sign up with email/password
  async SignUp(email:any, password:any) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
      console.log(result.user);
      this.router.navigate(['/nouveauUser/'+email]);
    } catch (error) {
      window.alert(error);
    }
  }
  // Sign in with email/password
  async SignIn(email:any, password:any) {
    try {
      const result = await this.afAuth
        .signInWithEmailAndPassword(email, password);
      console.log(result);
      this.router.navigate([''])

    } catch (error) {
      window.alert(error);
    }
  }
}