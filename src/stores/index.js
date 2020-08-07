import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers';
import reduxThunk from 'redux-thunk';

export const store=createStore(reducer,{},applyMiddleware(reduxThunk));
