var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight as _highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-coy.css';
require('prismjs/components/prism-jsx');

var Html = function (_React$Component) {
  _inherits(Html, _React$Component);

  function Html(props) {
    _classCallCheck(this, Html);

    var _this = _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).call(this, props));

    var propertyValues = _this.props.propertyValues || {};
    _this.state = {
      html: propertyValues.html || ''
    };
    return _this;
  }

  _createClass(Html, [{
    key: 'updateHtmlValue',
    value: function updateHtmlValue(code) {
      this.setState({
        html: code
      }, this.updateProps);
    }
  }, {
    key: 'updateProps',
    value: function updateProps() {
      this.props.changeHandler(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(Editor, {
          value: this.state.html,
          onValueChange: function onValueChange(code) {
            return _this2.updateHtmlValue(code);
          },
          highlight: function highlight(code) {
            return _highlight(code, languages.markup);
          },
          padding: 10
        })
      );
    }
  }]);

  return Html;
}(React.Component);

Html.propTypes = {
  propertyValues: PropTypes.object
};

export default Html;