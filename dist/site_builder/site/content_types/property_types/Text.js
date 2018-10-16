var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var Text = function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text(props) {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    var propertyValues = _this.props.propertyValues || {};
    _this.state = {
      text: propertyValues.text || ''
    };
    return _this;
  }

  _createClass(Text, [{
    key: 'updateTextValue',
    value: function updateTextValue(evt) {
      this.setState({
        text: evt.target.value
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
        React.createElement('input', { className: 'input', type: 'text', placeholder: this.props.display_name, value: this.state.text, onChange: function onChange(evt) {
            return _this2.updateTextValue(evt);
          } })
      );
    }
  }]);

  return Text;
}(React.Component);

Text.propTypes = {
  propertyValues: PropTypes.object
};

export default Text;