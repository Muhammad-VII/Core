import { fade } from './../../animtaions';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import gsap from 'gsap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [fade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  artists: any[] = [];
  pages: number[] = [1, 2, 3, 4, 5, 6];
  pageNumber: number[] = [];
  trendingMovies$!: Observable<any[]>;
  headerData!: any[]
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;
  loading:boolean = false
  myTrackByFn(index: any, value: any) {
    return value.id
  }
  constructor(private _MoviesService: MoviesService, private spinner: NgxSpinnerService) {
    this.spinner.show()
    this.changePageMovies(1);
  }

  changePageMovies(pageNumber: number) {
    this.trendingMovies$ = this._MoviesService.getMoviePigaion(pageNumber).pipe(map(data => data.results.map((data:any) => data, this.headerData = data.results)))
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
