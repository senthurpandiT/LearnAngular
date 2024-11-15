import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',

})
export class ChildComponent {
    constructor() { }

  ngOnInit() {

  }

}
