import { Component , Injectable, OnInit} from '@angular/core';
import { Mangas_model } from '../Model/Mangas_model';
import { MangasService } from '../Services/Mangas/mangas.service';

@Component({
  selector: 'app-sample-big-text',
  templateUrl:'./sample-big-text.component.html',
  styleUrls: ['./sample-big-text.component.scss'],
  providers: [MangasService],

})

@Injectable({providedIn: 'root'})

export class SampleBigTextComponent implements OnInit {

  public mangas!: Mangas_model[];
  public currentManga!: Mangas_model;
  public toggle: boolean;
  public allBook: Mangas_model[] = [];
  public lastArrayBook!:Mangas_model[];


  constructor(public mangasService: MangasService){
    this.toggle = false;
  }

  ngOnInit(): void {
    //this.mangas = this.mangasService.list_mangas;
    //console.log(this.mangas, this.mangas.list_mangas[1].name);
    this.mangasService.getAllMangas().subscribe(res => {
      this.allBook = res.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        } as Mangas_model;
      })
    })

    this.allBook.map(e =>{
      // this.lastArrayBook.push(e.img_tome + e.tome)
     })

     console.log(this.lastArrayBook);


  }

  public lastTome(){



  }

  public showModal(book: Mangas_model): void {
    this.toggle = true;
    this.currentManga = book;
  }

}
