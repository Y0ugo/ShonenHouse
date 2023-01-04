import { Component ,Injectable,OnInit} from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Mangas_model } from '../Model/Mangas_model';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent  implements OnInit{
public search_mangas!: FormGroup;
public listeManga = document.querySelector('.listeManga');
public resultat: any[] = []; //la liste des mangas recuperer lors de la recherche
public booleen_result: Boolean = false;
public allBook!: Mangas_model[];
public mangas_id:any; 


  constructor(private mangas: MangasService , private list_Mangas: FormBuilder ,private router: Router) {

    this.search_mangas = this.list_Mangas.group({
      search: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],

    })
  }
  
  

  ngOnInit() {

    this.mangas.getAllMangas().subscribe(res => {
      this.allBook = res.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        } as Mangas_model;
      })
    })
    

  }

  showBookId(book:any){
    console.log(book);
    this.mangas_id = book;
    this.router.navigate(['/mangas_id/'+ book])
    
}

mangas_value(){

  let nameSearch = this.search_mangas.value.search;
  nameSearch = nameSearch.charAt(0).toUpperCase()+nameSearch.substr(1);// 1er lettre en majuscule
  
    this.allBook.map(e =>{
      if(e.name == nameSearch){

        this.resultat.push(e);
        this.booleen_result = true;
        let num = Math.floor(Math.random() * this.allBook.length)

        console.log(num);
      }
    })


}

  show_mangas(index: Number){

    console.log(index);

  } 
}
