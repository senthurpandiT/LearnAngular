import { Component, computed, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../directives/searchfilter.pipe";

interface Snack {
  id: number;
  name: string;
}

interface User {
  name: string;
  favoriteSnacks: Snack[];
}

export class Employee {
  constructor(
    public name: string,
    public id: number
  ) { }
}
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule, FilterPipe],
  templateUrl: './parent.component.html',
  preserveWhitespaces: true,
})
export class ParentComponent {


  // itemArray = [
  //   { id: 1, name: 'Item 1', value: 5 },
  //   { id: 2, name: 'Item 2', value: 15 },
  //   { id: 3, name: 'Item 3', value: 20 },
  //   { id: 4, name: 'Item 4', value: 8 },
  //   { id: 5, name: 'Item 5', value: 12 },
  // ];

  // searchTerm: string = '';
  // searchFields: string[] = ['id', 'name', 'value'];


  // data !: Employee
  // result: any[] = [];
  // senData() {
  //   this.data = {
  //     name: 'John Doe',
  //     id: 123
  //   };
  // }

  // @ViewChild('vc', { read: ViewContainerRef }) vc !: ViewContainerRef;

  // @ViewChild('tpl', { read: TemplateRef }) tpl!: TemplateRef<any>;

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  // ngAfterViewInit() {
  //   console.log(this.vc?.element?.nativeElement?.textContent);

  //   let view = this.tpl?.createEmbeddedView(null);
  //   this.vc?.insert(view);
  // }

  // async ngOnInit() {
  //   console.log('ngonint');
  // const result = await this.checkDataCondition();
  // console.log(result);

  // }
  // checkDataCondition(): Promise<any> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       for (let i = 0; i < this.itemArray.length; i++) {
  //         const item = this.itemArray[i];

  //         if (item.value > 10) {
  //           this.result.push(item); // Add to the result if condition is satisfied
  //         }
  //       }
  //       res(this.result)
  //     }, 10000);
  //   })
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called');
  // }
  // @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;


  // loadComponent() {
  //   // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
  //   const componentRef = this.container.createComponent(ChildComponent);
  //   setTimeout(() => {
  //     this.container.clear();
  //   }, 2000);
  // }
  @ViewChild('admin', { read: TemplateRef, static: true }) adminTemplate!: TemplateRef<any>;
  @ViewChild('basic', { read: TemplateRef, static: true }) basicTemplate!: TemplateRef<any>;
  isAdmin = false;
  // adminTemplate = viewChild('admin', { read: TemplateRef });
  // basicTemplate = viewChild('basic', { read: TemplateRef });

  toggleProfileType() {
    this.isAdmin = !this.isAdmin;
  }
  profileTemplate(): TemplateRef<any> {
    return this.isAdmin ? this.adminTemplate : this.basicTemplate;
  }

}
