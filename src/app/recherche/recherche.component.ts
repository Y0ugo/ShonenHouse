import { Component } from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {
public slides: any
  constructor(private mangas: MangasService) {

  }


  ngOnInit() {

    this.slides = this.mangas.list_mangas;
    console.log(this.slides);


  }
}
