import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteBuilder from './lib/App';
import registerServiceWorker from './registerServiceWorker';
import * as API from './api';

const site = {id: 1, name: 'Test Site', pages: [{id: 1, name: 'page 1'}, {id:2, name: 'page 2'}]}

ReactDOM.render( <SiteBuilder editable={true} api={API} site={site}/> , document.getElementById('root'));
registerServiceWorker();
export {
  SiteBuilder
};