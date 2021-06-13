import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animtaions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations: [fade],
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
