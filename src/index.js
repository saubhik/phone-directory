import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css'
import PhoneDirectory from './PhoneDirectory';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// registerServiceWorker()