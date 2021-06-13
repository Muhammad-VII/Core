import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animtaions';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
  animations: [fade],
})
export class NetworkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
