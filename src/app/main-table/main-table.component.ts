import { Component, Input, OnInit } from '@angular/core';
import { SoccerTeam } from '../shared/SoccerTeam.model';
import { timesBrasileirao } from './teams-mock';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  @Input() teams: SoccerTeam[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
