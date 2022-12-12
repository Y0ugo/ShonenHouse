import { Component , Injectable, OnInit} from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';

@Component({
  selector: 'app-sample-big-text',
  templateUrl:'./sample-big-text.component.html',
  styleUrls: ['./sample-big-text.component.scss'],
  providers: [MangasService],

})

@Injectable({providedIn: 'root'})

export class SampleBigTextComponent implements OnInit {

  public mangas: any;

  constructor(private list_mangas: MangasService){ }


ngOnInit(): void {
  this.mangas = this.list_mangas;
  //console.log(this.mangas, this.mangas.list_mangas[1].name);

}

}
