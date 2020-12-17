import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
    title: string
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>as requested, I did this: Props: {props.title} </p>
        <p>does it auto reload</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
