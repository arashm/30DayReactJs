import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Keys from './components/keys';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Keys />, document.getElementById('root'));
registerServiceWorker();
