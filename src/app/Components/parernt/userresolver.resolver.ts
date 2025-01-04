import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../api.service';



export const userresolverResolver: ResolveFn<boolean> = (route, state) => {
  const apiservice = inject(ApiService);
  return apiservice.readMusic$('acdc');
};

export const countryresolverResolver: ResolveFn<boolean> = (route, state) => {
  const apiservice = inject(ApiService);
  return apiservice.readWeather$();
};
