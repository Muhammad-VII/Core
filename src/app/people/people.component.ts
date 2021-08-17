import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { fade, fadeDelay } from 'src/animtaions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations: [fade, fadeDelay],
})
export class PeopleComponent implements OnInit {

  artists:any[] = []
  imgUrl: string = `http://image.tmdb.org/t/p/w500/`;

  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getPerson().subscribe((res) => {
      this.artists = res.results
    })
  }
  ngOnInit(): void {
  }

}
