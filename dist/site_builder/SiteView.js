var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import 'bulma/css/bulma.css';
import Sidebar from './menu/Sidebar';
import Site from './site/Site';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Provider } from "react-redux";
import { compose } from 'redux';
import PropTypes from 'prop-types';
import store from "./redux/store";
import './SiteBuilder.css';

var SiteBuilder = function (_React$Component) {
  _inherits(SiteBuilder, _React$Component);

  function SiteBuilder() {
    _classCallCheck(this, SiteBuilder);

    return _possibleConstructorReturn(this, (SiteBuilder.__proto__ || Object.getPrototypeOf(SiteBuilder)).apply(this, arguments));
  }

  _createClass(SiteBuilder, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Provider,
        { store: store },
        React.createElement(
          'div',
          { className: 'container site-container' },
          React.createElement(
            'div',
            { className: 'columns' },
            React.createElement(
              'div',
              { className: 'column is-12' },
              React.createElement(Site, this.props)
            )
          )
        )
      );
    }
  }]);

  return SiteBuilder;
}(React.Component);

export default compose(DragDropContext(HTML5Backend))(SiteBuilder);