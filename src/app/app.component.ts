import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'angularlatest';
  //  userId: Signal<string> = getUserId();
  //  userResource = resource({
  //   request: () => ({id: userId()}),
  //   loader: ({request}) => fetchUser(request),
  // });
}
