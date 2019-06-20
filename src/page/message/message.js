import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是信息页面',
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