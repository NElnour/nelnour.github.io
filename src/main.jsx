import React from 'react'
import ReactDOM from 'react-dom'
import '/src/assets/css/index.css'
import App from './App'
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
