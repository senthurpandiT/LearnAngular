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
  imports: [ChildComponent, CommonModule, FormsModule, ReactiveFormsModule],
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
  ) {

  }


  // ngAfterViewInit() {
  //   console.log(this.vc?.element?.nativeElement?.textContent);

  //   let view = this.tpl?.createEmbeddedView(null);
  //   this.vc?.insert(view);
  // }

  ngOnInit() {
    console.log('ngonint');



    const Dogs = [{
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: 3,
      description: "Friendly and energetic.",
      long_description: "Buddy is a friendly Golden Retriever who loves to play outdoors and enjoys long walks. He is very loyal and loves to be around people.",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Bella",
      breed: "Labrador Retriever",
      age: 5,
      description: "Loyal and playful.",
      long_description: "Bella is a playful Labrador Retriever who gets along well with other dogs and children. She enjoys swimming and playing fetch at the park.",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Charlie",
      breed: "Beagle",
      age: 2,
      description: "Curious and alert.",
      long_description: "Charlie is a curious Beagle with a great sense of smell. He loves to explore the outdoors and is very energetic. A perfect companion for active families.",
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "Max",
      breed: "Bulldog",
      age: 4,
      description: "Calm and friendly.",
      long_description: "Max is a calm and friendly Bulldog who enjoys lounging around the house but also loves short walks. He's great with kids and other pets.",
      location: "Houston, TX"
    },
    {
      id: 5,
      name: "Lucy",
      breed: "German Shepherd",
      age: 3,
      description: "Intelligent and protective.",
      long_description: "Lucy is a highly intelligent German Shepherd. She’s protective of her family and excels at obedience training. She needs regular mental and physical stimulation.",
      location: "Miami, FL"
    },
    {
      id: 6,
      name: "Molly",
      breed: "Poodle",
      age: 1,
      description: "Playful and affectionate.",
      long_description: "Molly is a playful Poodle who loves to cuddle and be around people. She’s great with kids and enjoys learning new tricks.",
      location: "Dallas, TX"
    },
    {
      id: 7,
      name: "Daisy",
      breed: "Boxer",
      age: 6,
      description: "Energetic and fun-loving.",
      long_description: "Daisy is an energetic Boxer who loves to play and run around. She’s a fun-loving dog who enjoys being part of the family and is good with kids.",
      location: "San Francisco, CA"
    },
    {
      id: 8,
      name: "Bailey",
      breed: "Shih Tzu",
      age: 2,
      description: "Affectionate and small.",
      long_description: "Bailey is an affectionate Shih Tzu who loves to be pampered and spend time with family. Despite her small size, she’s quite energetic and enjoys playing.",
      location: "Boston, MA"
    },
    {
      id: 9,
      name: "Sadie",
      breed: "Chihuahua",
      age: 4,
      description: "Bold and spunky.",
      long_description: "Sadie is a bold Chihuahua with a big personality. She’s spunky and loves to follow her humans around. She’s perfect for people looking for a small, lively companion.",
      location: "Seattle, WA"
    },
    {
      id: 10,
      name: "Luna",
      breed: "Siberian Husky",
      age: 3,
      description: "Adventurous and independent.",
      long_description: "Luna is a spirited Siberian Husky who loves outdoor adventures. She has a lot of energy and enjoys running and exploring, but she can be independent and sometimes stubborn.",
      location: "Denver, CO"
    },
    {
      id: 11,
      name: "Rocky",
      breed: "Rottweiler",
      age: 7,
      description: "Strong and loyal.",
      long_description: "Rocky is a strong and loyal Rottweiler who loves his family. He is protective and will stand guard, but he’s also gentle and loving towards his loved ones.",
      location: "Phoenix, AZ"
    }]

    setTimeout(() => {
      this.data = Dogs
      // this.loader = true
    }, 5000);

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

