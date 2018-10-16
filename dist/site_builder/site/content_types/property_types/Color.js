var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

var Color = function (_React$Component) {
  _inherits(Color, _React$Component);

  function Color(props) {
    _classCallCheck(this, Color);

    var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, props));

    var propertyValues = _this.props.propertyValues || {};
    _this.updateColor = _this.updateColor.bind(_this);
    _this.state = {
      color: propertyValues.color || '#fff',
      alpha: propertyValues.alpha || 100
    };
    return _this;
  }

  _createClass(Color, [{
    key: 'updateColor',
    value: function updateColor(color) {
      this.setState({
        color: color.color,
        alpha: color.alpha
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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'nav',
          { className: 'level' },
          React.createElement(
            'div',
            { className: 'level-left' },
            React.createElement(
              'div',
              { className: 'level-item' },
              this.props.display_name
            )
          ),
          React.createElement(
            'div',
            { className: 'level-right field has-addons' },
            React.createElement(
              'div',
              { className: 'level-item' },
              React.createElement(
                'div',
                { style: { margin: '20px 20px 20px', textAlign: 'center' } },
                React.createElement(ColorPicker, {
                  animation: 'slide-up',
                  color: this.state.color,
                  alpha: this.state.alpha,
                  onChange: this.updateColor
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Color;
}(React.Component);

Color.propTypes = {
  propertyValues: PropTypes.object
};

export default Color;