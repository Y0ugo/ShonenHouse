import { Component } from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {
public slides: string[] = [];
  constructor(private mangas: MangasService) {

  }


  ngOnInit() {

    for(let i =0 ; i < this.mangas.list_mangas.length; i++){
      this.slides.push(this.mangas.list_mangas[i].img_mangas)
      console.log(this.slides[i]);

    }
  }
}
