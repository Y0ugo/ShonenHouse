import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  public user!: any;
  constructor(
    public afAuth: AngularFireAuth ,// Inject Firebase auth service
    public router : Router,

  ) {}
  // Sign up with email/password
  async SignUp(email:any, password:any) {
    try {
    const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
        console.log( result.additionalUserInfo);

      this.router.navigate(['/nouveauUser/'+email+'/'+result.user?.uid]);
    } catch (error) {
      window.alert(error);
    }
  }

  // Sign in with email/password
  async SignIn(email:any, password:any) {
    try {
      const result = await this.afAuth
        .signInWithEmailAndPassword(email, password);
      console.log(result.user?.uid);
      this.router.navigate([''])

    } catch (error) {
      window.alert(error);
    }
  }


  get_User(user_verif:any){

    if(user_verif == this.user) {
      return this.user;

    }else return undefined;

  }
}
