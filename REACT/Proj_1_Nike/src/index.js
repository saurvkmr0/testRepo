import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../src/style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
        document.getElementById("root")
);

