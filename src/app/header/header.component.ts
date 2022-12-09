import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public video: string = "Chainsaw Man  TRAILER";
public videoHeader = document.getElementsByClassName("videoHeader");
public videoBoolean: boolean = false;
public showVideo(): void {
this.videoBoolean = true;

}
}
