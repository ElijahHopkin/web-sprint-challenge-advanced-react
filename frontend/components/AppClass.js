import React from 'react'
import axios from 'axios'

export default class AppClass extends React.Component {
  constructor () {
    super ()
    this.state= {
      grid: [[null, null, null], [null, "B", null], [null, null, null]] ,
      x: 2,
      y: 2,
      steps: 0,
      email: '',
      message: '' 
    }
  }
  up = () => {
    if (this.state.y >1) {
      this.setState({
        ...this.state,
        y: this.state.y -1,
        steps: this.state.steps +1
      })
    }else{
      this.setState({
        ...this.state,
        message: "You can't go up"
      })
    }
  }

  down = () => {
    if (this.state.y<3) {
      this.setState({
        ...this.state,
        y: this.state.y +1,
        steps: this.state.steps +1
      })
    }else{
      this.setState({
        ...this.state,
        message: "You can't go down"
      })
    }
  }

  left = () => {
    if(this.state.x>1) {
      this.setState({
        ...this.state,
        x: this.state.x -1,
        steps: this.state.steps +1,
      })
    }else{
      this.setState({
        ...this.state,
        message: "You can't go left"
      })
    }
  }

  right = () => {
    if(this.state.x<3) {
    this.setState({
      ...this.state,
      x: this.state.x+1,
      steps: this.state.steps +1,
    })
  }else{
    this.setState({
      ...this.state,
      message: "You can't go right"
    })
  }
  }

  reset = () => {
    this.setState({
      ...this.state,
      grid: [[null, null, null], [null, "B", null], [null, null, null]] ,
      x:2,
      y:2,
      steps: 0,
      email: '',
      message: '',
    })
    console.log(this.state)
  }

  inputHandler =(e) => {
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log (this.state)
    const payload = {
      x: this.state.x,
      y: this.state.y,
      steps: this.state.steps,
      email: this.state.email
    }
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        this.setState({
          ...this.state,
          message: res.data.message,
          email: '',
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          message: err.response.data.message,
          email: '',
        })
      })
  }

  render() {
    const {x, y} = this.state
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">
            {this.state.steps===1
            ? `You moved ${this.state.steps} time`
            : `You moved ${this.state.steps} times`}
          </h3>
        </div>
        <div id="grid">
          <div className={x===1 && y===1? 'square active' : 'square'}>{x===1 && y===1? 'B' : ''}</div>
          <div className={x===2 && y===1? 'square active' : 'square'}>{x===2 && y===1? 'B' : ''}</div>
          <div className={x===3 && y===1? 'square active' : 'square'}>{x===3 && y===1? 'B' : ''}</div>
          <div className={x===1 && y===2? 'square active' : 'square'}>{x===1 && y===2? 'B' : ''}</div>
          <div className={x===2 && y===2? 'square active' : 'square'}>{x===2 && y===2? 'B' : ''}</div>
          <div className={x===3 && y===2? 'square active' : 'square'}>{x===3 && y===2? 'B' : ''}</div>
          <div className={x===1 && y===3? 'square active' : 'square'}>{x===1 && y===3? 'B' : ''}</div>
          <div className={x===2 && y===3? 'square active' : 'square'}>{x===2 && y===3? 'B' : ''}</div>
          <div className={x===3 && y===3? 'square active' : 'square'}>{x===3 && y===3? 'B' : ''}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left"onClick={this.left}>LEFT</button>
          <button id="up" onClick ={this.up}>UP</button>
          <button id="right"onClick = {this.right}>RIGHT</button>
          <button id="down" onClick ={this.down}>DOWN</button>
          <button id="reset" onClick = {this.reset}>reset</button>
        </div>
        <form onSubmit = {this.onSubmit}>
          <input 
          id="email" 
          type="email" 
          placeholder="type email"
          value= {this.state.email} 
          onChange = {this.inputHandler}
          ></input>
          <input 
          id="submit" 
          type="submit" 
          onSubmit = {this.onSubmit}
          ></input>
        </form>
      </div>
    )
  }
}
