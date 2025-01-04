import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from '../skeleton.component';

@Component({
  selector: 'app-child',
  imports: [CommonModule, SkeletonComponent],
  standalone: true,
  templateUrl: './child.component.html',
  styles: ``,
})
export class ChildComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // this.countryList = this.route.snapshot.data['country']
  }
}
