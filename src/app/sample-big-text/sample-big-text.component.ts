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

  constructor(public mangasService: MangasService){
    this.toggle = false;
  }

  ngOnInit(): void {
    this.mangas = this.mangasService.list_mangas;
    //console.log(this.mangas, this.mangas.list_mangas[1].name);

  }

  public showModal(index: number): void {
    console.log('coucou')
    this.toggle = true;
    this.currentManga = this.mangas[index];
  }

}
