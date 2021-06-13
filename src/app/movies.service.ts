import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }


  getMovies(term:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${term}/week?api_key=3a9cb9d57fba6ea0325f141e98cde6de`)
  }
}
