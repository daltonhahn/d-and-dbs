import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleTabs from './SimpleTabs';
import reportWebVitals from './reportWebVitals';
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

var gfm = require('remark-gfm')

ReactDOM.render(
  <React.StrictMode>
    <SimpleTabs />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <ReactMarkdown plugins={[gfm]} source={input} />
  </React.StrictMode>,
  document.getElementsByClassName('markdown')[0]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
