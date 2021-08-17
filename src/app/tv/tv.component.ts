import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { fade } from './../../animtaions';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
  animations: [fade],
})
export class TvComponent implements OnInit {
  constructor(private _MovieService: MoviesService, private _ActivatedRoute:ActivatedRoute) {
    this.changePageTv(1);
  }
  pages: number[] = [1, 2, 3, 4, 5, 6];
  pageNumber: number[] = [];
  trendingTv: any[] = [];
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;

  changePageTv(pageNumber: number) {
    this._MovieService.getTvPigaion(pageNumber).subscribe((data) => {
      this.trendingTv = data.results;
    });
  }

  ngOnInit(): void {}
}
