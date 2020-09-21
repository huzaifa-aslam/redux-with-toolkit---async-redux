import React from 'react';
import './App.css';
import {Counter} from './components/Feature/Counter/Counter'
// to initialize server start heere
import {makeServer} from './components/Server'
makeServer({environment:'development'})
// to initialize server end heere

function App() {
  return (
    <div className="App">
   <h3>Redux toolkit</h3>
   <Counter/>
    </div>
  );
}

export default App;
