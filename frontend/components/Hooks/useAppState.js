import {useState} from 'react'
import axios from 'axios'

const initialState = {
    grid: [[null, null, null], [null, "B", null], [null, null, null]] ,
        x:2,
        y:2,
        steps: 0,
        email: '',
        message: '',
  }

const useAppState = () => {

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
    return ([up, down, left, right, reset, inputHandler, onSubmit, state]) 
  }

  export default useAppState