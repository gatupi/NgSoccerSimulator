import { TeamLogo } from "./TeamLogo.model";
import { MatchDataDetailed } from "./MatchDataDetailed.model";

export class SoccerTeam {

  public MatchData: MatchDataDetailed = new MatchDataDetailed();

  constructor(public name: string, public logo: TeamLogo = new TeamLogo(TeamLogo.validFileName(name))) {

  }

  
}