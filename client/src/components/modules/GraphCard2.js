import React, { useState, useEffect } from 'react'
 
import JXGBoard from 'jsxgraph-react-js'

 
const GraphCard2 = (props) => {
  const [a, seta] = useState(2);
  const [A, setA] = useState(1);
  const [b, setb] = useState(3);
  const [B, setB] = useState(4);
  const [delta, setdelta] = useState(5);

  const [logicJS, setLogicJS] = useState(0);


  useEffect(() => {
    setLogicJS((brd) => {
      brd.suspendUpdate();
     
      let c = brd.create('curve', [
        ( t => { return A * Math.sin(a * t + delta); } ),
        ( t => { return B * Math.sin(b * t); } ),
        0, 2 * Math.PI], { strokeColor: '#aa2233', strokeWidth: 3 });
      brd.unsuspendUpdate();
    })

  }, [a, A, b, B, delta]);


  useEffect(() => {
    console.log(a);
  }, [a]);
  return (
    <>
    <input type="range" min="1" max="10" value={a} class="slider" onChange={(e) => seta(e.target.value)}/>
    <input type="range" min="1" max="10" value={b} class="slider" onChange={(e) => setb(e.target.value)}/>
    <input type="range" min="1" max="10" value={A} class="slider" onChange={(e) => setA(e.target.value)}/>
    <input type="range" min="1" max="10" value={B} class="slider"onChange={(e) => setB(e.target.value)} />
    <input type="range" min="1" max="10" value={delta} class="slider" onChange={(e) => setdelta(e.target.value)}/>
    {logicJS === 0 ? <div/> : <JXGBoard
      logic={logicJS}
      boardAttributes={{ axis: true, boundingbox: [-12, 10, 12, -10] }}
      style={{
        border: "3px solid red"
      }}
<<<<<<< HEAD
    />
    </div>
=======
    />}
    
    </>
>>>>>>> daa3ea938114859e00ed45110d5b876b6e386d33
  )
}

export default GraphCard2;