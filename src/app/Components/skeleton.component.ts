import { Component, Input } from '@angular/core';

@Component({
  selector: 'ax-skeleton',
  standalone: true,
  template: `
 <div class="skeleton">

      <div class="loader" [class.shimmer]="animate"></div>
</div>
  `,
  styles: `
 
.loader {
    position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #ffa50097;
  animation: l24 1s infinite linear;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.loader:after {
  animation-duration: 4s;
}
@keyframes l24 {
  100% {transform: rotate(1turn)}
}
  `,
})
export class SkeletonComponent {
  @Input() animate = false;
}
