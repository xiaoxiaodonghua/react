
import React from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

import home from '../page/home/home.js';
import message from '../page/message/message.js';
import about from '../page/about/about.js';
import words from '../page/words/word.js';


export default () => (
    <Router>
        <ul className="header">
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/message">我的文章</Link>
            </li>
            <li>留言</li>
            <li>关于我</li>
        </ul>
        <div className="content-box">
            <Route exact path="/" component={home} />
            <Route exact path="/message" component={message} />
            <Route exact path="/about" component={about} />
            <Route exact path="/words" component={words} />
        </div>
    </Router>
)
