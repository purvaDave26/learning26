import React from 'react'
import { useParams } from 'react-router-dom';

export const SportsDetails = () => {

    const sport = [
  {
    id: 1,
    name: "cricket",
    players: "11",
    teams: 2,
    origin: "England",
    knownplayer: [
      { id: 1, name: "Sachin Tendulkar" },
      { id: 2, name: "Virat Kohli" }
    ]
  },
  {
    id: 2,
    name: "swimming",
    players: "individual",
    teams: 0,
    origin: "Ancient Egypt",
    knownplayer: [
      { id: 1, name: "Michael Phelps" },
      { id: 2, name: "Katie Ledecky" }
    ]
  },
  {
    id: 3,
    name: "badminton",
    players: "1 or 2",
    teams: 2,
    origin: "India",
    knownplayer: [
      { id: 1, name: "PV Sindhu" },
      { id: 2, name: "Lin Dan" }
    ]
  },
  {
    id: 4,
    name: "table tennis",
    players: "1 or 2",
    teams: 2,
    origin: "England",
    knownplayer: [
      { id: 1, name: "Ma Long" },
      { id: 2, name: "Deng Yaping" }
    ]
  },
  {
    id: 5,
    name: "cycling",
    players: "individual/team",
    teams: 1,
    origin: "France",
    knownplayer: [
      { id: 1, name: "Chris Froome" },
      { id: 2, name: "Eddy Merckx" }
    ]
  }
];
    const id=useParams().id
    const foundsports=sport.find((sp)=>sp.id == id)
  return (
    <div style={{textAlign:"center"}}>
      <h1>id</h1>
      <h2>name={foundsports.name}</h2>
      <h2>players={foundsports.players}</h2>
      <h2>teams={foundsports.teams}</h2> 
      <h2>origin={foundsports.origin}</h2>
      {
        foundsports.knownplayer.map((players)=>
        {
          <h2>{players.name}</h2>
        })
      }
    </div>
  )
}
