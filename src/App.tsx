import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { GETPOSTS } from './features/Posts/store/Constants/ActionTypes';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

function App() {
  const dispatch:Dispatch<any>=useDispatch()
  const posts=useSelector((state:any)=>state.posts)

  useEffect(()=>{
    dispatch({type:GETPOSTS})
  },[])
  return (
    <div className="App">

    <Card>
    <CardContent>
    {JSON.stringify(posts)}

      </CardContent>
    </Card>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
