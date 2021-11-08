import { Component, OnInit } from '@angular/core';
import { timesBrasileirao } from '../main-table/teams-mock';
import { matches } from '../match-round/rounds-mock';
import { MatchData } from '../shared/MatchData.model';
import { SoccerMatch } from '../shared/SoccerMatch.model';
import { SoccerTeam } from '../shared/SoccerTeam.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public teams: SoccerTeam[] = timesBrasileirao;
  public matches: SoccerMatch[][] = matches;

  constructor() { }

  ngOnInit(): void {
    matches.forEach(round => {
      round.forEach(match => {
        MatchData.PlayMatch(match.Home, match.Away, match.HomeGoals, match.AwayGoals);
      });
    });
  }

}
