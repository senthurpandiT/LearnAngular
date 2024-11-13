import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../parent/parent.component';
import { DogService } from '../Injections/dog.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',

})
export class ChildComponent {


  // newEmployee: Employee | null = new Employee('senthur', 456);
  @Input() childData: any;

  constructor() { }

  ngOnInit() {


    if (this.childData) {
      console.log(this.childData, 'ChildComponent');
    } else {
      console.log(this.childData, 'ChildComponent');
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called');
  // }
  update() {
    const A = {
      id: this.childData.legth++,
      name: "Buddy",
      breed: "Golden Retriever",
      age: 3,
      description: "Friendly and energetic.",
      long_description: "Buddy is a friendly Golden Retriever who loves to play outdoors and enjoys long walks. He is very loyal and loves to be around people.",
      location: "New York, NY"
    }
    this.childData.push(A);
    console.log(this.childData);

    setTimeout(() => {

      // this.childData.shift(A);
    }, 2000);
  }
}
