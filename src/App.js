import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {useSelector} from "react-redux";
import List from './components/List';

import {
  selectCount,
} from './features/counter/counterSlice';

window.tmp = [];

function App() {
  const count = useSelector(selectCount);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <List count={count} />
      </header>
    </div>
  );
}

export default App;
