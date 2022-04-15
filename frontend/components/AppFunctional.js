import React from 'react'
import useAppState from './Hooks/useAppState'



export default function AppFunctional(props) {
  
    const [up, 
      down, 
      left, 
      right, 
      reset, 
      inputHandler, 
      onSubmit, 
      state
    ] = useAppState()







  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">{state.steps===1
        ? `You moved ${state.steps} time`
        : `You moved ${state.steps} times`}
        </h3>
      </div>
      <div id="grid">
        <div className={state.x===1 && state.y===1? 'square active': 'square'}>{state.x===1 && state.y===1? 'B': ''}</div>
        <div className={state.x===2 && state.y===1? 'square active': 'square'}>{state.x===2 && state.y===1? 'B': ''}</div>
        <div className={state.x===3 && state.y===1? 'square active': 'square'}>{state.x===3 && state.y===1? 'B': ''}</div>
        <div className={state.x===1 && state.y===2? 'square active': 'square'}>{state.x===1 && state.y===2? 'B': ''}</div>
        <div className={state.x===2 && state.y===2? 'square active': 'square'}>{state.x===2 && state.y===2? 'B': ''}</div>
        <div className={state.x===3 && state.y===2? 'square active': 'square'}>{state.x===3 && state.y===2? 'B': ''}</div>
        <div className={state.x===1 && state.y===3? 'square active': 'square'}>{state.x===1 && state.y===3? 'B': ''}</div>
        <div className={state.x===2 && state.y===3? 'square active': 'square'}>{state.x===2 && state.y===3? 'B': ''}</div>
        <div className={state.x===3 && state.y===3? 'square active': 'square'}>{state.x===3 && state.y===3? 'B': ''}</div>
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick = {left}>LEFT</button>
        <button id="up" onClick = {up}>UP</button>
        <button id="right" onClick = {right}>RIGHT</button>
        <button id="down" onClick = {down}>DOWN</button>
        <button id="reset" onClick = {reset}>reset</button>
      </div>
      <form onSubmit = {onSubmit}>
        <input 
        id="email" 
        type="email" 
        placeholder="type email" 
        value= {state.email}
        onChange = {inputHandler}
        ></input>
        <input id="submit" type="submit" ></input>
      </form>
    </div>
  )
}
