import { IMatchData } from "./IMatchData.model";
import { SoccerTeam } from "./SoccerTeam.model";

export class MatchData implements IMatchData {

    private _won: number = 0;
    private _drawn: number = 0;
    private _lost: number = 0;
    private _goalsFor: number = 0;
    private _goalsAgainst: number = 0;

    public get Won(): number {
        return this._won;
    }

    public get Drawn(): number {
        return this._drawn;
    }

    public get Lost(): number {
        return this._lost;
    }

    public get GoalsFor(): number {
        return this._goalsFor;
    }

    public get GoalsAgainst(): number {
        return this._goalsAgainst;
    }

    public get GoalDifference(): number {
        return this._goalsFor - this._goalsAgainst;
    }

    public get Played(): number {
        return this._won + this._drawn + this._lost;
    }

    public get Points(): number {
        return this._won * 3 + this._drawn;
    }

    public static PlayMatch(home: SoccerTeam, away: SoccerTeam, homeGoals: number, awayGoals: number) {

        let homeData = home.MatchData.AsHome;
        let awayData = away.MatchData.AsAway;

        if (homeGoals > awayGoals) {
            homeData._won++;
            awayData._lost++;
        }
        else if (homeGoals < awayGoals) {
            homeData._lost++;
            awayData._won++;
        }
        else {
            homeData._drawn++;
            awayData._drawn++;
        }

        homeData._goalsFor += homeGoals;
        homeData._goalsAgainst += awayGoals;
        awayData._goalsFor += awayGoals;
        awayData._goalsAgainst += homeGoals;
    }
}