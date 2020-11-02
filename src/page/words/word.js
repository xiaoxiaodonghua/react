import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是关于我页面',
        }
    }

    seeInformation = () => {
        console.log(233)
    }
   
    render () {
        return (
            <div className="home">
                <p onClick={this.seeInformation}>{this.state.msg}</p>
            </div>
        )
    }
}

export default Home;