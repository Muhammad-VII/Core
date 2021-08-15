import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  id:string=''; 
  tvDetalis:any={};
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.params.id;
   _MoviesService.getTvDetalis(this.id).subscribe((response)=>{
    this.tvDetalis = response;
   })
  }

  watchNow(term:String){
    const link = `https://movs4u.vip/tvshows/${term.split(' ').join('-')}/`
    window.open(link, '_blank');
  }
  ngOnInit(): void {
    
  }
}
