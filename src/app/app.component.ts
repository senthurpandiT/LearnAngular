import { Component, resource, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularlatest';
  //  userId: Signal<string> = getUserId();
  //  userResource = resource({
  //   request: () => ({id: userId()}),
  //   loader: ({request}) => fetchUser(request),
  // });

}
