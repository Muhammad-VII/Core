import { MoviesService } from './../movies.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) {
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  isLogOut() {
    this._AuthService.logout();
  }

  ngOnInit(): void {
    const searchInput = $('#search')
    $(searchInput).on('keyup', () => {
      if($(searchInput).val() != '') {
        $('#searchRes').fadeIn(400, () => {
          $('#movies').fadeOut(400)
          $('#movie-details').fadeOut(400)
          $('#tv-detalis').fadeOut(400)
          $('#tv').fadeOut(400)
          $('#people').fadeOut(400)
          $('#artist-details').fadeOut(400)
        })
      } else {
        $('#searchRes').fadeOut(400, () => {
          $('#movies').fadeIn(400)
          $('#movie-details').fadeIn(400)
          $('#tv-detalis').fadeIn(400)
          $('#tv').fadeIn(400)
          $('#people').fadeIn(400)
          $('#artist-details').fadeIn(400)
        })
      }
    })
    
    let tvOffset = 700
    $(window).on('scroll', () => {
      let windowScroll = $(window).scrollTop();
      if (windowScroll > tvOffset) {
        $('#main-nav').css('backgroundColor','#1317225b').css(`box-shadow`,`none`)
      } else {
        $('#main-nav').css('backgroundColor', '#131722').css(`box-shadow`,`rgb(50, 50, 93) 0px 14px 17px -5px,
        rgba(0, 0, 0, 0.486) 0px 8px 11px -8px`)
      }
    })
  }
}
