import { Component, Input, OnInit } from '@angular/core';
import { SoccerMatch } from '../shared/SoccerMatch.model';
import { matches } from './rounds-mock';

@Component({
  selector: 'app-match-round',
  templateUrl: './match-round.component.html',
  styleUrls: ['./match-round.component.css']
})
export class MatchRoundComponent implements OnInit {

  @Input() public Matches: SoccerMatch[][] = [];
  public currentRound: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
