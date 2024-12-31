import { CommonModule } from '@angular/common';
import { Component, computed, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from "../skeleton.component";

@Component({
  selector: 'app-child',
  imports: [CommonModule, SkeletonComponent],
  templateUrl: './child.component.html',
  styles: ``
})
export class ChildComponent {
  constructor(private route: ActivatedRoute) { }
  countryList = resource({
    loader: () => {
      return fetch(`https://restcountries.com/v3.1/all?fields=name,flags`).then(
        (res) => res.json()
      );;
    },
  })
  ngOnInit() {
    console.log(this.countryList.value);
    // this.countryList = this.route.snapshot.data['country']  
  }

}
