// reducers.js
// 工具函数，用于阻止多个reducer，并返回reducer集合
import { combineReducers } from 'redux';
// 默认值
import defaultState from './state.js';

// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
    console.log(333,action);
    // console.log('走到这里了PageTitle');
    // console.log(action,state);
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE' : 
            return action.data
        default:
            return state
    }
}

function infoList (state = defaultState.infoList, action) {
    // console.log('走到这里了infoList');
    // console.log(action);
    switch (action.type) {
        case 'SET_INFO_LIST':
            console.log(8888)
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    pageTitle,
    infoList
})