import React from 'react';
import { connect } from 'react-redux';
import { setPageTitle, setInfoList } from '../../store/action.js';
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是首页',
        }
    }

    componentDidMount () {
        let { setPageTitle, setInfoList } = this.props
        // 触发setPageTitle action
        setPageTitle('新的标题')
        // 触发setInfoList action
        setInfoList([
            {name: '晓冬'},
            {name: '晓晓冬'},
            {name: '晓晓红'}
        ]);
        console.log('state中的数据', this.props)
    }
   
    render () {
        let { pageTitle, infoList } = this.props;
        return (
            <div className="home">
                <p>{this.state.msg}</p>

                <h1>{pageTitle}</h1>
                { 
                     infoList.length > 0 ? (
                        <ul>
                            {
                                infoList.map((item, index) => 
                                    <li key={index}>{item.name}</li>
                                )
                            }
                        </ul>
                    ):null
                }
            </div>
        )
    }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
      pageTitle: state.pageTitle,
      infoList: state.infoList
    }
  }
  
  // mapDispatchToProps：将dispatch映射到组件的props中
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setPageTitle (data) {
          // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
          dispatch(setPageTitle(data))
          // 执行setPageTitle会返回一个函数
          // 这正是redux-thunk的所用之处:异步action
          // 上行代码相当于
          /*dispatch((dispatch, getState) => {
              dispatch({ type: 'SET_PAGE_TITLE', data: data })
          )*/
      },
      setInfoList (data) {
          dispatch(setInfoList(data))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Home);