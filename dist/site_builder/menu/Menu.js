var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from './Body';
import Content from './Content';
import Layout from './Layout';

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.handleChange = function (tab) {
      _this.setState({ tab: tab });
    };

    _this.state = { tab: 'body' };
    return _this;
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'tabs is-small' },
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              { className: this.state.tab === 'body' ? 'is-active' : '', onClick: function onClick(e) {
                  return _this2.handleChange('body', e);
                } },
              React.createElement(
                'a',
                null,
                React.createElement(
                  'span',
                  { className: 'icon' },
                  React.createElement(FontAwesomeIcon, { icon: 'columns', size: '1x' })
                ),
                React.createElement(
                  'span',
                  null,
                  'Body'
                )
              )
            ),
            React.createElement(
              'li',
              { className: this.state.tab === 'layout' ? 'is-active' : '', onClick: function onClick(e) {
                  return _this2.handleChange('layout', e);
                } },
              React.createElement(
                'a',
                null,
                React.createElement(
                  'span',
                  { className: 'icon' },
                  React.createElement(FontAwesomeIcon, { icon: 'bars' })
                ),
                React.createElement(
                  'span',
                  null,
                  'Layout'
                )
              )
            ),
            React.createElement(
              'li',
              { className: this.state.tab === 'content' ? 'is-active' : '', onClick: function onClick(e) {
                  return _this2.handleChange('content', e);
                } },
              React.createElement(
                'a',
                null,
                React.createElement(
                  'span',
                  { className: 'icon' },
                  React.createElement(FontAwesomeIcon, { icon: 'th-large' })
                ),
                React.createElement(
                  'span',
                  null,
                  'Content'
                )
              )
            )
          )
        ),
        this.state.tab === 'content' && React.createElement(Content, null),
        this.state.tab === 'layout' && React.createElement(Layout, null),
        this.state.tab === 'body' && React.createElement(Body, null)
      );
    }
  }]);

  return Menu;
}(React.Component);

export default Menu;