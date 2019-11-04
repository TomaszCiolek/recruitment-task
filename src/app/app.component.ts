import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Tomek';

  constructor() {
    this.changeName('T');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
