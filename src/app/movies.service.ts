import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }


  // getMovies(term:string): Observable<any>{
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${term}/week?api_key=3a9cb9d57fba6ea0325f141e98cde6de`)
  // }

  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }

  getTvDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }

  getpersonDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }

  getMoviePigaion(pageNumber:number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTvPigaion(pageNumber:number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }
}
