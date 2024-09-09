import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-App';
  display!: boolean;
  showSideBar() {
    this.display = true;
  }
  hideSideBar() {
    this.display = false;
  }
}
