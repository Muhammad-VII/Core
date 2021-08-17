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
  artists: any[] = [];
  pages: number[] = [1, 2, 3, 4, 5, 6];
  pageNumber: number[] = [];
  trendingMovies: any[] = [];
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;

  constructor(private _MoviesService: MoviesService) {
    this.changePageMovies(1);
  }

  changePageMovies(pageNumber: number) {
    this._MoviesService.getMoviePigaion(pageNumber).subscribe((data) => {
      this.trendingMovies = data.results;
    });
  }

  ngOnInit(): void {
    let fade = () => {
      const tl = gsap.timeline({ default: { ease: 'power1.out' } });
      tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
      tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
      tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
    };
    fade();
  }
}
