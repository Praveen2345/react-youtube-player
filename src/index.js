import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/app';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
    <div>
        <App/>
    </div>
  , document.querySelector('.container'));


{/*<Provider store={createStoreWithMiddleware(reducers)}>*/}
    {/*<App />*/}
{/*</Provider>*/}
{/*<SearchBar />*/}