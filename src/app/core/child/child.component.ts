import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',

})
export class ChildComponent {

  newEmployee: Employee | null = new Employee('senthur', 456);
  @Input() childData: Employee | null = null;
  ngOnInit() {
    if (this.childData) {
      console.log(this.childData, 'ChildComponent', this.newEmployee);
    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
