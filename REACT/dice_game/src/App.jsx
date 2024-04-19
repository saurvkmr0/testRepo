import React from 'react'
import Home from './components/Home';
import './index.css';
import GamePage from './components/GamePage';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container max-w-full'>
        <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/GamePage' Component={GamePage}></Route>
        </Routes>
    </div>
  );
}

export default App