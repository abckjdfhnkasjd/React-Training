// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const initialState = {};
const middleWare = [thunk];

let store;

// const store = createStore(rootReducer)

// if(window.navigator.userAgent.includes('Chrome')){
//     store = createStore (
//         rootReducer,
//         compose(applyMiddleware(...middleWare),
//         window.__REDUX_DEVTOOLS_EXTENSIONS__ &&
//         window.__REDUX_DEVTOOLS_EXTENSIONS__())
//     );
// } else {
    store = createStore (
        rootReducer,
        compose(applyMiddleware(...middleWare))
    );
// }

export default store;