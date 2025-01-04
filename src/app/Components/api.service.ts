import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  readMusic$(searchTerm: string): Observable<any> {
    return this.http.get(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}`).pipe(
      map((response: any) => {
        return response.results;
      }),
    );
  }

  readWeather$(): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/all?fields=name,flags`).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
