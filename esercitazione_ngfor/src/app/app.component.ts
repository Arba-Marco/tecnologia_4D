import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione_ngfor';
  lista_auto =[
    { id: 1, name: 'Lamborghini Aventador'},
    { id: 2, name: 'Ferrari Roma'},
    { id: 3, name: 'Porsche 911'},
    { id: 4, name: 'Bugatti'},

    
  ];
}
