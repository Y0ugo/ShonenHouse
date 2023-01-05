import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MangasService } from '../Services/Mangas/mangas.service';
import { Mangas_model } from '../Model/Mangas_model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
public video: any;
public header_video: any
public image_header: any;
public mangas:any;
public videoHeader = document.getElementById("videoHeader");
public videoBoolean: boolean = false;
public numero: Number = 0;
public allBook!: Mangas_model[];

public NumberRandom:any // liste des id des mangas

constructor(private serviceMangas: MangasService){

}
ngOnInit() {

  this.serviceMangas.getAllMangas().subscribe(res => {
    this.allBook = res.map(e => {
      return{
        id: e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Mangas_model;
    })
      console.log('tous mes livres : ',this.allBook);

    this.NumberRandom = Math.floor(Math.random() * this.allBook.length)
  })



}

/*
public showVideo(): void {
this.videoBoolean = true;
this.image_header = this.header_img()

}

pause_video(){

  if(this.videoBoolean){
   this.videoHeader?.onpause
  }

}

header_img(){

  if( this.videoBoolean == true){

     return '.././assets/image/font_noir.jpg'
  }
  else{
    return this.video.img_mangas
  }
}*/





}
