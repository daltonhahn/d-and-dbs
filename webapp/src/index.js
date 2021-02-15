import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleTabs from './SimpleTabs';
import reportWebVitals from './reportWebVitals';
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

const input = "## How about some code?"

ReactDOM.render(
  <React.StrictMode>
    <SimpleTabs />
    <ReactMarkdown source={input} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
