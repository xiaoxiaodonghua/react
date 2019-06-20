
import React from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';

import home from '../page/home/home.js';
import message from '../page/message/message.js';


export default () => (
    <Router>
            <Route exact path="/" component={home} />
            <Route exact path="/message" component={message} />
    </Router>
)
