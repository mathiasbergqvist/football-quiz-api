import fetch from "node-fetch";
const API_ENDPOINT = "https://api-football-v1.p.rapidapi.com/v2";

export const getTeam = async teamId => {
    const response = await fetch(`${API_ENDPOINT}/teams/team/${teamId}`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            Accept: "application/json"
        }
    })
    .then(data => data.json())
    .then(res => res.api.teams);
    return response;
};

export const getSquad = async (teamId, season) => {
    const response = await fetch(`${API_ENDPOINT}/players/squad/${teamId}/${season}`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            Accept: "application/json"
        }
    })
    .then(data => data.json())
    .then(res => res.api.players);
    return response;
};
