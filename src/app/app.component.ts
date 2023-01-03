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
 /*
  for(let i = 0; i< this.mangas.list_mangas.length; i++){
    let mangas1 = {
      name: this.mangas.list_mangas[i].name,
      author: this.mangas.list_mangas[i].author,
       tome: this.mangas.list_mangas[i].tome,
       img_tome: this.mangas.list_mangas[i].img_tome,
      img_mangas: this.mangas.list_mangas[i].img_mangas,
       video: this.mangas.list_mangas[i].video,
       price: this.mangas.list_mangas[i].price,
       stock: this.mangas.list_mangas[i].stock,
       like:this.mangas.list_mangas[i].like,
    
  }

  this.mangas.addMangas(mangas1)
  }
 */ 
  

  }

  

    
      
    

  
}
