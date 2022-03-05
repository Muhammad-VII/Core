import { Subscription } from 'rxjs';
import { fade } from './../../animtaions';
import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [fade],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  id: string = ``;
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;
  moviesdetails: any;
  subscription!: Subscription
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.subscription = this._MoviesService.getMovieDetails(this.id).subscribe((response) => {
        this.moviesdetails = response;
      })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
