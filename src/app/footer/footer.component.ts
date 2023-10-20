import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // variables
  public currentDate!: number;

  constructor() {
    this.currentDate = Date.now();
  }

}
