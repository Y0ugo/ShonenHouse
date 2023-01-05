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
  public slides_nbr: Mangas_model[] = [];
  public allBook!: Mangas_model[];
  public allLike!: Number[];

  constructor(private mangasService: MangasService )  {

  }




  ngOnInit() {
 this.mangasService.getAllMangas().subscribe(res => {
  this.allBook = res.map(e => {
    return{
      id: e.payload.doc.id,
      ...e.payload.doc.data() as{}
    } as Mangas_model;
  })

  if(this.allBook){
  for (let i = 0 ;i< this.allBook.length ; i++ ){
      if(this.allBook[i].like > 1500){
        this.slides_nbr.push(this.allBook[i])
      }
    }
  }


 })}



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
