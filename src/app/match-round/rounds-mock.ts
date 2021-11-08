import { SoccerMatch } from "../shared/SoccerMatch.model";
import { timesBrasileirao } from "../main-table/teams-mock";
import { SoccerTeam } from "../shared/SoccerTeam.model";

let teams: SoccerTeam[] = timesBrasileirao;

export let matches: SoccerMatch[][] = [
    [
        {Home: teams[0], Away: teams[1], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[2], Away: teams[3], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[4], Away: teams[5], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[6], Away: teams[7], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[8], Away: teams[9], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[10], Away: teams[11], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[12], Away: teams[13], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[14], Away: teams[15], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[16], Away: teams[17], HomeGoals: 3, AwayGoals: 0},
        {Home: teams[18], Away: teams[19], HomeGoals: 3, AwayGoals: 0}
    ]
];