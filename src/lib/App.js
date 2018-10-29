import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import SiteBuilder from './site_builder/SiteBuilder';
import SiteView from './site_builder/SiteView';
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
    var editable = false;
    if (this.props.editable != null && this.props.editable == true) {
      editable = true;
    }
    return (
      <div className="App">
        {editable && <SiteBuilder {...this.props}/>}
        {!editable && <SiteView {...this.props}/>}
      </div>
    );
  }
}

export default App;
