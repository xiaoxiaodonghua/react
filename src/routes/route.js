
import React from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';

import home from '../page/home/home.js';
import message from '../page/message/message.js';
import about from '../page/about/about.js';
import words from '../page/words/word.js';


export default () => (
    <Router>
        <Route exact path="/" component={home} />
        <Route exact path="/message" component={message} />
        <Route exact path="/about" component={about} />
        <Route exact path="/words" component={words} />
    </Router>
)
