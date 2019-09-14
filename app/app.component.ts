import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  height: number
  width: number

  constructor() {
    this.height = 300
    this.width = 300
  }

  zoomIn() {

    if (this.height == 500 || this.width == 500)
      return

    this.height += 10
    this.width += 10
  }

  zoomOut() {

    if (this.height == 80 || this.width == 80)
      return

    this.height -= 10
    this.width -= 10
  }

}