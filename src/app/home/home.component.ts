import { AuthService } from './../auth.service';
import { fade } from './../../animtaions';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[fade],
})
export class HomeComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  firstName:string = ""
  lastName:string = ""

  showUserName(){
    this.firstName = this._AuthService.userName.first_name
    this.lastName = this._AuthService.userName.last_name
  }

  ngOnInit(): void {
    let fade = () => {
      const tl = gsap.timeline({ default: { ease: 'power1.out' } });
      tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
      tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
      tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
    }
    fade()
    this.showUserName()
  }
}