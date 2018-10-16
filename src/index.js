import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteBuilder from './lib/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <SiteBuilder /> , document.getElementById('root'));
registerServiceWorker();
export {
  SiteBuilder
};