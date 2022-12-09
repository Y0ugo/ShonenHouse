import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ShonenHouse';

  public slides = [
    { src: "assets/image/populaires/animeboy.jpg" },
    { src: "assets/image/populaires/animegirl.jpg" },
    { src: "assets/image/populaires/chainsawman1.jpg" },
    { src: "assets/image/populaires/onepiece.jpg" }
  ];
}
