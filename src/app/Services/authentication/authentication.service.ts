import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router} from '@angular/router';
import { UserService } from '../Users/user.service';
import { User_model } from 'src/app/Model/User_model';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  public user!: any;
  public user_connecté:any;
  constructor(
    public afAuth: AngularFireAuth ,// Inject Firebase auth service
    public router : Router,
    private userService : UserService,

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
      this.user_connecté = this.get_User(result.user?.uid);
      console.log(this.user_connecté);

      this.router.navigate(['/acceuil/'+result.user?.uid])

    } catch (error) {
      window.alert(error);
    }
  }


  get_User(id:any){

      let user = this.userService.firestoreCollection.doc(id).valueChanges().subscribe(res => this.user_connecté = res)
    if(user){
      return user;
    }
    else return undefined;

  }
}
