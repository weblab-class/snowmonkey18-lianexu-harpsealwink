import React, { Component } from 'react'
 
import JXGBoard from 'jsxgraph-react-js'
import "./GraphCard2.css"; 

let logicJS = (board) => {
  
}
 
const GraphCard2 = (props) => {
  return (
    <JXGBoard
      logic={logicJS}
      boardAttributes={{ axis: true, boundingbox: [-12, 10, 12, -10] }}
      style={{
        border: "3px solid red"
      }}
    />
  )
}

export default GraphCard2;