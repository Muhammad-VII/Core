import { fade } from './../../animtaions';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [fade]
})
export class MovieDetailsComponent implements OnInit {

  id:string = ``;
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;
  moviesdetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id
    this._MoviesService.getMovieDetails(this.id).subscribe((response) => {
      this.moviesdetails = response
    })
  }

}
