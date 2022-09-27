import { useReducer } from 'react'
import './Instance.css'

const colorStages = [
  '#0ca3e7',
  '#166dac',
  '#2661ae',
  '#3857af',
  '#4a4db1',
  '#5b42b4',
  '#6c3ab7',
  '#7e36a5',
  '#94318e',
  '#a92a78',
  '#bd2261',
  '#d11c4a',
  '#e82340',
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'r':
      return {
        ...state,
        index: state.index < 12 ? state.index + 1 : 12
      }
    case 'b':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : 0
      }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const iState = {
  index: 0
}

const Instance = () => {
  const [state, dispatch] = useReducer(reducer, iState)

  console.log('stage:', colorStages[state.index])

  const style = {
    width: '250px',
    height: '250px',
    borderRadius: "50%",
    background: `${colorStages[state.index]}`
  }

  return (
    <div>
      <button onClick={() => dispatch({ type: 'b' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'r' })}>Help!</button>
      <div style={style}></div>
    </div>
  )
}

export default Instance