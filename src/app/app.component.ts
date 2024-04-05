import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Observavel } from '../observavel/observavel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'observavel';

  constructor() {
    (window as any)['observar'] = () =>
      new Observavel((subscriber) => {
        setTimeout(() => {
          subscriber.next('foi');
        }, 1000);
      });
  }
}
