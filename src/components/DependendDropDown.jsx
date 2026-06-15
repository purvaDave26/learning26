import React, { useState } from 'react'

export const DependendDropDown = () => {

    const [country, setcountry] = useState("");
    const [state, setstate] = useState("")
    const [city, setcity] = useState("");
    // const states = [
    // { name: "India",state= [{sta:"Gujarat",city:["Ahmedabad","vadodara","anand"]},sta:"Maharashtra", sta:"Rajasthan"}]},
    // { name: "USA", state: ["Texas", "California", "Florida"]},
    // { name: "Canada",state: ["Ontario", "Alberta", "Quebec"]}]

    const states = [
  {
    name: "India",
    state: [
      {
        sta: "Gujarat",
        city: ["Ahmedabad", "Vadodara", "Anand"]
      },
      {
        sta: "Maharashtra",
        city: ["Mumbai", "Pune", "Nagpur"]
      },
      {
        sta: "Rajasthan",
        city: ["Jaipur", "Udaipur", "Jodhpur"]
      }
    ]
  },

  {
    name: "USA",
    state: [
      {
        sta: "Texas",
        city: ["Houston", "Dallas", "Austin"]
      },
      {
        sta: "California",
        city: ["Los Angeles", "San Diego", "San Francisco"]
      },
      {
        sta: "Florida",
        city: ["Miami", "Orlando", "Tampa"]
      }
    ]
  },

  {
    name: "Canada",
    state: [
      {
        sta: "Ontario",
        city: ["Toronto", "Ottawa", "Hamilton"]
      },
      {
        sta: "Alberta",
        city: ["Calgary", "Edmonton", "Red Deer"]
      },
      {
        sta: "Quebec",
        city: ["Montreal", "Quebec City", "Laval"]
      }
    ]
  }
];

    const countryHandler=(event)=>
    {
        setcountry(event.target.value);
        console.log(event.target.value);
    }
    const stateHandler=(event)=>
    {
        setstate(event.target.value);
        console.log(event.target.value);
    }

    const cityHandler=(event)=>
    {
        setcity(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>DependendDropDown</h1>
        <div>
            <label>Country:</label>
            <select onChange={(event)=>countryHandler(event)}>
                <option disabled>--select--</option>
               {
                states.map((sta)=>
                {
                    return<option>{sta.name}</option>
                })
               }
            </select>
          <h1>country:{country}</h1>
        </div>
        <div>
            <label>states:</label>
            <select onChange={(event)=>{stateHandler(event)}}>
                <option disabled>--select--</option>
                {
                 country && states.find((s)=>s.name==country).state.map((is)=>
                    {
                        return<option>{is.sta}</option>
                    })
                }
            </select>
            <h1>State:{state}</h1>
        </div>
        <div>
            <label>city:</label>
            <select onChange={(event)=>cityHandler(event)}>
                <option disabled>--select--</option>
                {
               country && state &&  states.find((s)=>s.name==country).state.find((is)=>is.sta==state).city.map((c=>
                {
                    return<option>{c}</option>
                  }
                  ))
                }
            </select>
            <h1>city:{city}</h1>
        </div>
    </div>  
  )
}
