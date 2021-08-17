import { fade } from './../../animtaions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
declare const $: any;
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss'],
  animations: [fade]
})
export class TvDetailsComponent implements OnInit {
  id: string = '';
  tvDetalis: any = {};
  imgPrefix: string = `http://image.tmdb.org/t/p/w500/`;

  constructor(
    _ActivatedRoute: ActivatedRoute,
    private _MovieService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params.id;
    _MovieService.getTvDetalis(this.id).subscribe((response) => {
      this.tvDetalis = response;
    });
  }
  
  watchTrailer() {
    $('.youtubeTrailer').fadeIn(300, () => {
      this._MovieService.getTvVideo(this.id).subscribe((res) => {
        $('iframe').attr('src',`https://www.youtube.com/embed/${res.results[0].key}`)
      })
    })
  }

  exitIframe() {
    $('.youtubeTrailer').fadeOut(300)
    document.querySelector('iframe')?.onpause;
  }

  watchNow(term: String) {
    const link = `https://movs4u.vip/tvshows/${term.split(' ').join('-')}/`;
    window.open(link, '_blank');
  }
  ngOnInit(): void {}
}
