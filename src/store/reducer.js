import { combineReducers } from 'redux'; // 为了可以引入多个reducer

import {reducer as first } from 'pages/first';

import {reducer as ticket} from 'pages/ticket';

export default combineReducers({
    first,
    ticket
})