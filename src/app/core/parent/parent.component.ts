import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
import { flush } from '@angular/core/testing';

export class Employee {
  constructor(
    public name: string,
    public id: number
  ) { }
}
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html'
})
export class ParentComponent implements AfterContentInit {


  itemArray = [
    { id: 1, name: 'Item 1', value: 5 },
    { id: 2, name: 'Item 2', value: 15 },
    { id: 3, name: 'Item 3', value: 20 },
    { id: 4, name: 'Item 4', value: 8 },
    { id: 5, name: 'Item 5', value: 12 },
  ];

  data !: Employee
  result: any[] = [];
  senData() {
    this.data = {
      name: 'John Doe',
      id: 123
    };
  }
  async ngOnInit() {
    const result = await this.checkDataCondition();
    console.log(result);

  }
  checkDataCondition(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        for (let i = 0; i < this.itemArray.length; i++) {
          const item = this.itemArray[i];

          if (item.value > 10) {
            this.result.push(item); // Add to the result if condition is satisfied
          }
        }
        res(this.result)
      }, 10000);
    })
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }


}
