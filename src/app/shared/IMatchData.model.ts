export interface IMatchData {
    
    get Won(): number;
    get Drawn(): number;
    get Lost(): number;
    get Played(): number;
    get GoalsFor(): number;
    get GoalsAgainst(): number;
    get GoalDifference(): number;
    get Points(): number;
}