import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Buttonroute } from './Route/Buttonroute';
import Backgrund from '../src/Background/Backgrund'

function App() {
  return (
    <div className="App">
      <Buttonroute />      
      <Backgrund />
    </div>
  );
}

export default App;