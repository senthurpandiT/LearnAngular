import { Component, computed, Signal, signal, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FilterPipe } from "../directives/searchfilter.pipe";
import { Observable, of } from 'rxjs';
import { DogService } from '../Injections/dog.service';

// interface Snack {
//   id: number;
//   name: string;
// }

// interface User {
//   name: string;
//   favoriteSnacks: Snack[];
// }

export class Employee {
  constructor(public name: string,
    public id: number) {

  }


}

interface UserItem {
  id: number;
  name: string;
  age: number;
}

interface User {
  id: number;
  name: string;
  users: UserItem[];  // A list of users
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule, FilterPipe, ReactiveFormsModule],
  templateUrl: './parent.component.html',
  preserveWhitespaces: true,
})
export class ParentComponent {
  // user = signal<User | null>(null);
  // x: any;
  // y: any;


  // itemArray = [
  //   { id: 1, name: 'Item 1', value: 5 },
  //   { id: 2, name: 'Item 2', value: 15 },
  //   { id: 3, name: 'Item 3', value: 20 },
  //   { id: 4, name: 'Item 4', value: 8 },
  //   { id: 5, name: 'Item 5', value: 12 },
  // ];

  // searchTerm: string = '';
  // searchFields: string[] = ['id', 'name', 'value'];


  data !: any
  loader: boolean = false;
  // result: any[] = [];
  // senData() {
  // }

  // @ViewChild('vc', { read: ViewContainerRef }) vc !: ViewContainerRef;

  // @ViewChild('tpl', { read: TemplateRef }) tpl!: TemplateRef<any>;

  constructor(
    // private componentFactoryResolver: ComponentFactoryResolver,
    // private fb: FormBuilder,
    public dogservice: DogService
  ) { }


  // ngAfterViewInit() {
  //   console.log(this.vc?.element?.nativeElement?.textContent);

  //   let view = this.tpl?.createEmbeddedView(null);
  //   this.vc?.insert(view);
  // }

  ngOnInit() {
    console.log('ngonint');

    setTimeout(() => {
      this.data = this.dogservice?.Userdata
      // this.loader = true
    }, 5000);
    // 

    // let fetchedUser: User = {
    //   id: 1,
    //   name: 'John Doe',
    //   users: [
    //     { id: 1, name: 'Alice', age: 25 },
    //     { id: 2, name: 'Bob', age: 30 },
    //   ]
    // };

    // this.user.set(fetchedUser);
    // const result = await this.checkDataCondition();
    // console.log(result);
    // this.x = signal(5);
    // this.y = signal(3);


  }

  // updateName(userItem: UserItem): void {
  //   const newName = prompt('Enter a new name', userItem.name);

  //   if (newName) {
  //     // Update the user's name in the signal
  //     userItem.name = newName;
  //     this.user.update(user => ({
  //       ...user!,
  //       users: user!.users.map(u =>
  //         u.id === userItem.id ? { ...u, name: newName } : u
  //       )
  //     }));
  //   }
  // }

  // // Function to update the age of a user
  // updateAge(userItem: UserItem): void {
  //   const newAge = prompt('Enter a new age', userItem.age.toString());
  //   if (newAge) {
  //     // Update the user's age in the signal
  //     userItem.age = parseInt(newAge, 10);
  //     this.user.update(user => ({
  //       ...user!,
  //       users: user!.users.map(u =>
  //         u.id === userItem.id ? { ...u, age: userItem.age } : u
  //       )
  //     }));
  //   }
  // }

  // trackById(index: number, item: UserItem): number {
  //   console.log(item.id);

  //   return item.id;
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

  // ngAfterViewInit(): void {

  //   console.log(this.loader, 'ngAfterViewInit called');


  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called');
  // }

  // ngAfterViewChecked(): void {

  //   console.log('ngAfterViewChecked called');
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
  // @ViewChild('admin', { read: TemplateRef, static: true }) adminTemplate!: TemplateRef<any>;
  // @ViewChild('basic', { read: TemplateRef, static: true }) basicTemplate!: TemplateRef<any>;
  // isAdmin = false;


  // toggleProfileType() {
  //   this.isAdmin = !this.isAdmin;
  // }
  // profileTemplate(): TemplateRef<any> {
  //   return this.isAdmin ? this.adminTemplate : this.basicTemplate;
  // }


}

