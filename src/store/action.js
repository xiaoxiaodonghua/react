// actions.js

import axios from 'axios';
// action也是函数
export function  setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data})
    }
}

export function  setInfoList(data) {
    return (dispatch, getState) => {
        axios.get('/api/getInfoList', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).catch(err => {
            console.log(err)
            dispatch({ type: 'SET_INFO_LIST', data:data });
        })
    }
}