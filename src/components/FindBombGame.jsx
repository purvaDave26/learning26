import React, { useMemo, useState } from 'react'

export const FindBombGame = () => {
    const gridsize=5;
    var totaltiles=gridsize*gridsize;
    const [clickedTiles, setclickedTiles] = useState([])
    const [isGameOver, setisGameOver] = useState(false)

    const bomb=useMemo(()=>
      {
        return Math.floor(Math.random()*totaltiles)
      },[clickedTiles]);
    console.log("bomb:",bomb);
    const clickHandler=(index)=>
    {
      setclickedTiles([...clickedTiles,index])
      if(index==bomb)
      {
        setisGameOver(true)
      }
    }

    const reset=()=>{

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FindBomb Game</h1>
        <div  style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridsize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}>
          {Array.from({length:totaltiles}).map((_,index)=>{
            return(
              <div
              onClick={()=>{clickHandler(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor:clickedTiles.includes(index)?"gray":"white",
                cursor: "pointer",
                pointerEvents:isGameOver? "none":"auto"
              }}>{ isGameOver && bomb === index ? "💣" : index}</div>


            );
          })}
        </div>

        <button onClick={()=>{setisGameOver(false),setclickedTiles([])}}>Restart</button>
    </div>
  )
}
