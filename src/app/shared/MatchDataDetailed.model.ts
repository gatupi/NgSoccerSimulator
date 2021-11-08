import { MatchData } from "./MatchData.model";
import { IMatchData } from "./IMatchData.model";

export class MatchDataDetailed implements IMatchData {

    public AsHome: MatchData = new MatchData();
    public AsAway: MatchData = new MatchData();

    public get Won(): number {
        return this.AsHome.Won + this.AsAway.Won;
    }

    public get Drawn(): number {
        return this.AsHome.Drawn + this.AsAway.Drawn;
    }

    public get Lost(): number {
        return this.AsHome.Lost + this.AsAway.Lost;
    }

    public get GoalsFor(): number {
        return this.AsHome.GoalsFor + this.AsAway.GoalsFor;
    }

    public get GoalsAgainst(): number {
        return this.AsHome.GoalsAgainst + this.AsAway.GoalsAgainst;
    }

    public get Played(): number {
        return this.AsHome.Played + this.AsAway.Played;
    }

    public get GoalDifference(): number {
        return this.AsHome.GoalDifference + this.AsAway.GoalDifference;
    }

    public get Points(): number {
        return this.AsHome.Points + this.AsAway.Points;
    }
}