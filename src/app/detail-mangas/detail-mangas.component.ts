import { Component ,OnInit} from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-detail-mangas',
  templateUrl: './detail-mangas.component.html',
  styleUrls: ['./detail-mangas.component.scss']
})
export class DetailMangasComponent implements OnInit {

  constructor(public recherche: RechercheComponent){}


  ngOnInit(): void {
      
  }

}


