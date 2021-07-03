import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {Provide} from 'react-redux';//Named export
import {createStore} from 'redux';
import reducers from './reducers'

//the App will be wrapped around the provider
//this wiring will enable any component to use the connect compoennt 
//and the purpose of the connect component is to communicate with the provider and thus communicate with all the data in the redux store
ReactDom.render(
<Provider store={createStore(reducers)}>
<App/>
</Provider>, 
document.querySelector('#root'));