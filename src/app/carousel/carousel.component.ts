import { Component, Input,OnInit} from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Mangas_model } from '../Model/Mangas_model';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

public nbr_like: Number = 1550;
  public slides!: Mangas_model[];
  public allBook!: Mangas_model[];

  constructor(private mangasService: MangasService) {

  }


  ngOnInit() {
 this.mangasService.getAllMangas().subscribe(res => {
  this.allBook = res.map(e => {
    return{
      id: e.payload.doc.id,
      ...e.payload.doc.data() as{}
    } as Mangas_model;
  })
})




}



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
