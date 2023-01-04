import { Component ,Injectable,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mangas_model } from '../Model/Mangas_model';
import { RechercheComponent } from '../recherche/recherche.component';
import { MangasService } from '../Services/Mangas/mangas.service';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-detail-mangas',
  templateUrl: './detail-mangas.component.html',
  styleUrls: ['./detail-mangas.component.scss']
})

@Injectable({
  providedIn:'root'
})
export class DetailMangasComponent implements OnInit {
public allBook: Mangas_model[] = [];
public id:any;
public array_nbr_tome: number[] = [1,2,3,4,5,6,7,8,9,10] 
public tomes!:any;


constructor(public recherche: RechercheComponent, private routeActive: ActivatedRoute,private serviceMangas:MangasService){
}


ngOnInit() {
  
  this.id = this.routeActive.snapshot.params["id"];
  console.log(this.routeActive.snapshot.params["id"]);
  
  this.serviceMangas.getAllMangas().subscribe(res => {
    this.allBook = res.map(e => {
      return{
        id: e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Mangas_model;
    })
  })
  
this.tomes = this.serviceMangas.firestoreCollection.doc(this.id).valueChanges().subscribe(res => {
  this.tomes = res;  
});


}
   

}