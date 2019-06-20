import React from 'react';
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是首页',
        }
    }
   
    render () {
        return (
            <div className="home">
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default Home;