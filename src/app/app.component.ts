import { Component ,OnInit} from '@angular/core';
import { MangasService } from './Services/Mangas/mangas.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { Mangas_model } from './Model/Mangas_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  allBook!:Mangas_model [];
  id_mangas!:any; // id d'un mangas`
  id!:any; // id d'un mangas

  title = 'ShonenHouse';
  constructor(private serviceMangas:MangasService,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage ){
    }

  ngOnInit() {

    this.serviceMangas.getAllMangas().subscribe(res => {
      this.allBook = res.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        } as Mangas_model;
      })
    })



  }








}
