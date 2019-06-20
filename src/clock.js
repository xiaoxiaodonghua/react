import React from 'react';
import './App.css';

class Clock extends React.Component { // react class 组件
    constructor() {
        super();
        this.state = {
            date: new Date(),
            list: [
                {id:1, name: '晓冬'},
                {id:2, name: '小花'},
                {id:3, name: '小明'},
                {id:4, name: '小小冬'}
            ]
        };
    }
    componentWillMount() {
        console.log('组件刚加载的时候');
    }
    componentDidMount() {
        console.log('组件加载的时候');
        console.log(this);
        console.log(this.state);
        this.timerID =setInterval(
            ()=>this.tick(),1000
        )

    }
    componentWillUnmount() {
        console.log('组件卸载的时候');
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    changeTime() {
        return this.state.date.getSeconds();
    }
    test () {
        console.log('添加测试方法');
    }
    // getArr() {
    //    const list = this.state.list.map(
    //        item => (<li key={item.id.toString()}>{item.name}</li>)
    //    )
    //    console.log(list)
    //    return (<ul>{list}</ul>)
    // }
    render() {
        return (
            <div>
                <h2 onClick={this.test}>{this.props.name}</h2>
                <p>{this.changeTime()}</p>
                <List list={this.state.list}/>
            </div>  
        )
    }   
}

class List extends React.Component {
    render(){
        const {list} = this.props;
        return (
            <div>{list.map(item => <li key={item.id.toString()}>{item.name}</li>)}</div>
        )
    }

}

// function Clock (props) { // 函数组件貌似看起来简单点
//     return (
//         <h2>{props.name}</h2>
//     )
// }

export default Clock