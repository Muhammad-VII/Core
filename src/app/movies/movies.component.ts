import { fade } from './../../animtaions';
import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import gsap from 'gsap';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [fade],
})
export class MoviesComponent implements OnInit {
  moviesList: any[] = [];
  tvList: any[] = [];
  artists: any[] = [];

  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;
  constructor(_MoviesService: MoviesService) {
    _MoviesService.getMovies('movie').subscribe((data) => {
      this.moviesList = data.results.slice(0,10);
    });

    _MoviesService.getMovies('tv').subscribe((data) => {
      this.tvList = data.results.slice(0,10);
    });

    _MoviesService.getMovies('person').subscribe((data) => {
      this.artists = data.results.slice(0,10);
    });
  }

  ngOnInit(): void {
    let fade = () => {
      const tl = gsap.timeline({ default: { ease: 'power1.out' } });
      tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
      tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
      tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
    }
    fade()
  }
}
