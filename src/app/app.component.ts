import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./core/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'LearnAngular';
}
