import { Component ,OnInit} from '@angular/core';
import { AuthenticationService } from '../Services/authentication/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public user!:any;
  public user_connect:any

constructor(private AuthenticationService: AuthenticationService , private Activited:ActivatedRoute ){ }



  ngOnInit(): void {
      this.user = this.Activited.snapshot.params['user'];
      this.user_connect = this.AuthenticationService.get_User(this.user);
      console.log('utilisateur est connecté '+this.user_connect);


  }

}
