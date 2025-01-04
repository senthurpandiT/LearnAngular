import { PercentPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
