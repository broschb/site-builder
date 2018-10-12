import React from 'react';
import 'bulma/css/bulma.css'
import Sidebar from './menu/Sidebar';
import Site from './site/Site';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Provider } from "react-redux";
import { compose } from 'redux';
import PropTypes from 'prop-types';
import store from "./redux/store/index";
import './SiteBuilder.css'

class SiteBuilder extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container site-container">
          <div className="columns">
            <div className="column is-4">
              <Sidebar/>
            </div>
            <div className="column is-8">
              <Site/>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default compose(
  DragDropContext(HTML5Backend)
)(SiteBuilder)
