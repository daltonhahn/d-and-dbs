import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [markString, setMark] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  useEffect(() => {
    fetch('/mark_test').then(res => res.json()).then(data => {
      setMark(data.mark);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        ... NEW TEST no changes in this part ...

        <p>The current time is {currentTime}.</p>
        <p>{markString}</p>
        <Button variant="contained" color="primary">
    Hello World
  </Button>
      </header>
    </div>
  );
}

export default App;
