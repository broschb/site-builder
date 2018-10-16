var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import BaseContentType from './BaseContentType';
import './Divider.css';

var DEFAULT_COLOR = "#776f6f";

var Divider = function (_BaseContentType) {
  _inherits(Divider, _BaseContentType);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: 'renderContent',
    value: function renderContent(dataContent) {
      //TODO for pseudo class styling https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react
      var backColor = DEFAULT_COLOR;
      if (this.props.item.itemProperties.divider_color != null) {
        backColor = this.props.item.itemProperties.divider_color.color;
      }
      var styles = {
        borderTop: '.1rem solid ' + backColor
      };
      if (dataContent != null) {
        return React.createElement('div', { className: 'is-divider', 'data-content': dataContent, style: styles });
      } else {
        return React.createElement('div', { className: 'is-divider-custom', style: styles });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var dataContent = null;
      if (this.props.item.itemProperties.divider_text != null && this.props.item.itemProperties.divider_text.text.length > 0) {
        dataContent = this.props.item.itemProperties.divider_text.text;
      }
      return React.createElement(
        'div',
        null,
        this.renderContent(dataContent)
      );
    }
  }]);

  return Divider;
}(BaseContentType);

export default Divider;