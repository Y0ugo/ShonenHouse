import { Component } from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {
public slides: any;
public search_mangas!: FormGroup;
public listeManga = document.querySelector('.listeManga');
public resultat: any[] = []; //la liste des mangas recuperer
public booleen_result: Boolean = false;

  constructor(private mangas: MangasService , private list_M: FormBuilder) {

  }


  ngOnInit() {

    this.slides = this.mangas.list_mangas;

    this.search_mangas = this.list_M.group({

      search: [],

    })

    console.log(this.search_mangas.value.search);

  }


mangas_value(){


  console.log(this.search_mangas.value.search);

  for(let mangas of  this.mangas.list_mangas){

    if(mangas.name.toLowerCase() == this.search_mangas.value.search){

      console.log(mangas);

      this.resultat.push(mangas)
      this.booleen_result = true;
      console.log(this.resultat);


    }else{
            ///
    }
  }

}

  show_mangas(index: Number){

    console.log(index);

  }
}
