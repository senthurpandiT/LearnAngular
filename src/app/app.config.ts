import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ParentComponent } from './core/parent/parent.component';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([{
    path: 'login',
    loadChildren: () => import('./core/parent/parent.component').then(c => c.ParentComponent)
  }])]
};
