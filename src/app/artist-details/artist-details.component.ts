import { fade } from 'src/animtaions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
  animations:[fade]
})
export class ArtistDetailsComponent implements OnInit {

  id:string = ``;
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;
  artistDetails:any;
  artistMovies:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.id = this._ActivatedRoute.snapshot.params.id
    this._MoviesService.getArtistDetalis(this.id).subscribe((response) => {
      this.artistDetails = response
      console.log(response);
    })
   }

  ngOnInit(): void {
    
  }
}
