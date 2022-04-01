import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { KeyEventState } from './context/keyeventState'

ReactDOM.render(
  <React.StrictMode>
    <KeyEventState>
      <App />
    </KeyEventState>
  </React.StrictMode>,
  document.getElementById('root')
)
