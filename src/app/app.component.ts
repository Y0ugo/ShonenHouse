import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ShonenHouse';

  public slides = [
    { src: "assets/image/naruto.jpg" },
    { src: "assets/image/bleach.jpg" },
    { src: "assets/image/chainsawman.jpg" },
    { src: "assets/image/onepiece.jpeg" }
  ];
}
