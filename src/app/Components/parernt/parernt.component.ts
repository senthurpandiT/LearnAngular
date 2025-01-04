import { Component, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parernt',
  imports: [],
  templateUrl: './parernt.component.html',
  styles: ``
})
export class ParerntComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.data['user'], 'parernt component');
  }

}
