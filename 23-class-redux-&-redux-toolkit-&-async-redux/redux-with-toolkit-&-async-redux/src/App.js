import React from 'react';
import './App.css';
import {Counter} from './components/Feature/Counter/Counter'
import {ManageProducts} from './components/ManageProducts/ManageProducts'
// to initialize server start heere
import {makeServer} from './components/Server'
import ContextManage from './components/ContextManage/ContextManage'
makeServer({environment:'development'})
// to initialize server end heere

function App() {
  return (
    <div className="App">
   <h3>Redux toolkit</h3>
   <ContextManage/>
    </div>
  );
}

export default App;
