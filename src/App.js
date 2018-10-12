import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import SiteBuilder from './site_builder/SiteBuilder';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css';
import {
  faColumns,
  faBars,
  faThLarge,
  faSquare,
  faMinus,
  faCode,
  faFont,
  faImage, faAlignRight, faAlignCenter, faAlignLeft

} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faColumns, faBars, faThLarge, faSquare, faMinus, faCode, faFont, faImage, faAlignRight, faAlignCenter, faAlignLeft)

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteBuilder/>
      </div>
    );
  }
}

export default App;
