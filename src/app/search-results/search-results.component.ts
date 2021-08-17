import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  results:any[] = []
  imgUrl:string = `http://image.tmdb.org/t/p/w500/`;
  searchFn(term:string) {
    this._MoviesService.search(term).subscribe((res) => {
      this.results = res.results
    })
  }
  
  ngOnInit(): void {
    const searchInput = $('#search')
    $(searchInput).on('keyup', () => {
      this.searchFn($(searchInput).val())
    })
  }
}
