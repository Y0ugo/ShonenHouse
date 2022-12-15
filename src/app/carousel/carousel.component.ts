import { Component, Input,OnInit} from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

public nbr_img: Number = 4;
  public slides: string[] = [];
  constructor(private mangas: MangasService) {

  }


  ngOnInit() {

    for(let i =0 ; i < this.nbr_img; i++){
      this.slides.push(this.mangas.list_mangas[i].img_mangas)
      console.log(this.slides[i]);

    }
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
