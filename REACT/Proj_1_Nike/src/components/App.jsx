import React from 'react';
import Navbar from './Navbar';
import Frame from './Frame';
import Home from '../routing/Home';
import Contact from '../routing/Contact';
import Location from '../routing/Location';
import About from '../routing/About';
import {Routes, Route} from 'react-router-dom';
import LoginPage from '../routing/LoginPage';

function App()
{
    return(
        <div className='container'>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Frame}></Route>
                <Route path="/contact" Component={Contact}></Route>
                <Route path="/about" Component={About}/>
                <Route path="/location" Component={Location}></Route>
                <Route path="/login" Component={LoginPage}></Route>
            </Routes>
            {/* <LoginPage /> */}

            
        </div>
    );
}

export default App;