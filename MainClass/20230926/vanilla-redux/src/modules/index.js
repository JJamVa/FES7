import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ goodsReducer, stockReducer });// 2가지의 reducer를 하나로 사용 가능


export default rootReducer