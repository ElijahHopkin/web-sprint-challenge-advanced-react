import React, {useState} from 'react'
import axios from 'axios'

const initialState = {
  grid: [[null, null, null], [null, "B", null], [null, null, null]] ,
      x:2,
      y:2,
      steps: 0,
      email: '',
      message: '',
}

export default function AppFunctional(props) {
  const [state, setState] = useState(initialState)

  const up = () => {
    if (state.y >1) {
      setState({
        ...state,
        y: state.y -1,
        steps: state.steps +1
      })
    }else{
      setState({
        ...state,
        message: "You can't go up"
      })
    }
  }

  const down = () => {
    if (state.y<3) {
      setState({
        ...state,
        y: state.y +1,
        steps: state.steps +1
      })
    }else{
      setState({
        ...state,
        message: "You can't go down"
      })
    }
  }

  const left = () => {
    if(state.x>1) {
      setState({
        ...state,
        x: state.x -1,
        steps: state.steps +1,
      })
    }else{
      setState({
        ...state,
        message: "You can't go left"
      })
    }
  }

  const right = () => {
    if(state.x<3) {
    setState({
      ...state,
      x: state.x+1,
      steps: state.steps +1,
    })
  }else{
    setState({
      ...state,
      message: "You can't go right"
    })
  }
  }

  const reset = () => {
    setState({
      ...state,
      grid: [[null, null, null], [null, "B", null], [null, null, null]] ,
      x:2,
      y:2,
      steps: 0,
      email: '',
      message: '',
    })
    console.log(state)
  }

  const inputHandler =(e) => {
    setState({
      ...state,
      email: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log (state)
    const payload = {
      x: state.x,
      y: state.y,
      steps: state.steps,
      email: state.email
    }
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        setState({
          ...state,
          email: '',
          message: res.data.message
        })
      })
      .catch(err => {
        setState({
          ...state,
          email: '',
          message: err.response.data.message
        })
      })
  }
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
