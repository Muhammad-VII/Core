import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }
  apiKey:string = `3a9cb9d57fba6ea0325f141e98cde6de`
  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }

  getTvDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`)
  }

  getPerson(): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getArtistDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}&language=en-US`)
  }

  getMoviePigaion(pageNumber:number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTvPigaion(pageNumber:number): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTvVideo(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`)
  }

  search(query:string): Observable<any>
  {
    // https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${query}`)
  }
}
