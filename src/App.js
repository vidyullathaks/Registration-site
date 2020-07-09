import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import Display from './components/Display';
import Header2 from './components/Header2';


function App() {
  return (
    <div className="App">
    <Header/>
    <Register/>
    <Header2/>
    <Display/>
    </div>
  );
}

export default App;
