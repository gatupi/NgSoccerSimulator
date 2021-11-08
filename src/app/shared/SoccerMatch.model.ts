import { SoccerTeam } from "./SoccerTeam.model";

export class SoccerMatch {

    constructor(
        public Home: SoccerTeam,
        public Away: SoccerTeam,
        public HomeGoals: number,
        public AwayGoals: number)
    {
        
    }
}