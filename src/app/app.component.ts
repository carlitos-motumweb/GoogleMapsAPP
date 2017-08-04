import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    lugar: string = 'Parque Boomerang';
    lat: number = 18.8601938;
    lng: number = -97.1115161;
    zoom: number = 17;
}
