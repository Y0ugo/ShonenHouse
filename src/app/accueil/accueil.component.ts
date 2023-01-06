import { Component ,Injectable,OnInit} from '@angular/core';
import { AuthenticationService } from '../Services/authentication/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/Users/user.service';
import { User_model } from '../Model/User_model';
import { UserGuardGuard } from '../Guard/user-guard.guard';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
@Injectable({
  providedIn:'root'
})
export class AccueilComponent implements OnInit {
  public user:any ;
  public user_connect:any
  public id_connect:any;


constructor(private AuthenticationService: AuthenticationService , private Activited:ActivatedRoute, private userGuard: UserGuardGuard,private userService: UserService ){ }



  ngOnInit(): void {
      this.user = this.Activited.snapshot.params['user'];
      this.id_connect = this.Activited.snapshot.params['id'];
      console.log("ici le user =>" + this.id_connect);

      this.user_connect = this.userService.firestoreCollection.doc(this.id_connect).valueChanges().subscribe(res => this.user_connect = res)
       console.log("toto" + this.user_connect);


        //this.AuthenticationService.user = this.user;

  }


}
