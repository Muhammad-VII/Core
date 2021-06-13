import { fade } from './../../animtaions';
import { Component, OnInit } from '@angular/core';
fade;
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
  animations: [fade],
})
export class TvComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
