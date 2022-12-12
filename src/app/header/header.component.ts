import { Component, OnInit,Input } from '@angular/core';
import { MangasService } from '../Services/Mangas/mangas.service';


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
public videoHeader = document.getElementsByClassName("videoHeader");
public videoBoolean: boolean = false;
public numero: Number = 0;
constructor(private list_mangas: MangasService){

}
ngOnInit(): void {
  this.mangas = this.list_mangas;
  this.header_video = this.ramdomMangas()
  this.image_header = this.header_img();

}

public showVideo(): void {
this.videoBoolean = true;
this.image_header = this.header_img()

}

header_img(){

  if( this.videoBoolean == true){

     return '.././assets/image/font_noir.jpg'
  }
  else{
    return this.video.img_mangas
  }
}

ramdomMangas(){
  let num = Math.floor(Math.random() * this.mangas.list_mangas.length);

this.video = this.mangas.list_mangas[num];

console.log(this.video);

return this.video
}

}
