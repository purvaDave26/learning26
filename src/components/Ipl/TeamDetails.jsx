import React from 'react'
import { useParams } from 'react-router-dom';

export const TeamDetails = () => {

    const TeamList = [
  {
    id: 1,
    name: "RCB",
    homeGround: "M. Chinnaswamy Stadium, Bengaluru",
    captain: "Faf du Plessis",
    trophies: 1
  },
  {
    id: 2,
    name: "CSK",
    homeGround: "M. A. Chidambaram Stadium, Chennai",
    captain: "Ruturaj Gaikwad",
    trophies: 5
  },
  {
    id: 3,
    name: "MI",
    homeGround: "Wankhede Stadium, Mumbai",
    captain: "Hardik Pandya",
    trophies: 5
  },
  {
    id: 4,
    name: "KKR",
    homeGround: "Eden Gardens, Kolkata",
    captain: "Shreyas Iyer",
    trophies: 2
  },
  {
    id: 5,
    name: "DC",
    homeGround: "Arun Jaitley Stadium, Delhi",
    captain: "Rishabh Pant",
    trophies: 0
  },
  {
    id: 6,
    name: "SRH",
    homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
    captain: "Pat Cummins",
    trophies: 1
  },
  {
    id: 7,
    name: "RR",
    homeGround: "Sawai Mansingh Stadium, Jaipur",
    captain: "Sanju Samson",
    trophies: 1
  },
  {
    id: 8,
    name: "PBKS",
    homeGround: "IS Bindra Stadium, Mohali",
    captain: "Shikhar Dhawan",
    trophies: 0
  },
  {
    id: 9,
    name: "GT",
    homeGround: "Narendra Modi Stadium, Ahmedabad",
    captain: "Shubman Gill",
    trophies: 1
  },
  {
    id: 10,
    name: "LSG",
    homeGround: "BRSABV Ekana Stadium, Lucknow",
    captain: "KL Rahul",
    trophies: 0
  }
]
    const id=useParams().id;
    const foundTeam=TeamList.find((t)=>t.id==id)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Id:{id}</h1>
        <h2>Name:{foundTeam.name}</h2>
        <h2>homeground:{foundTeam.homeGround}</h2>
        <h2>captain:{foundTeam.captain}</h2>
        <h2>trophies:{foundTeam.trophies}</h2>
    </div>
  )
}
