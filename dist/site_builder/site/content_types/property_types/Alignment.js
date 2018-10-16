var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var Alignment = function (_React$Component) {
  _inherits(Alignment, _React$Component);

  function Alignment(props) {
    _classCallCheck(this, Alignment);

    var _this = _possibleConstructorReturn(this, (Alignment.__proto__ || Object.getPrototypeOf(Alignment)).call(this, props));

    var propertyValues = _this.props.propertyValues || {};
    _this.state = {
      align: propertyValues.align || 'center'
    };
    return _this;
  }

  _createClass(Alignment, [{
    key: 'updateAlign',
    value: function updateAlign(evt, type) {
      this.setState({
        align: type
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

      var leftClass = this.state.align == 'left' ? 'button is-selected is-info' : 'button';
      var centerClass = this.state.align == 'center' ? 'button is-selected is-info' : 'button';
      var rightClass = this.state.align == 'right' ? 'button is-selected is-info' : 'button';
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
                'p',
                { className: 'control' },
                React.createElement(
                  'a',
                  { className: leftClass, onClick: function onClick(evt) {
                      return _this2.updateAlign(evt, 'left');
                    } },
                  React.createElement(FontAwesomeIcon, { icon: 'align-left', size: '1x' })
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'level-item' },
              React.createElement(
                'p',
                { className: 'control' },
                React.createElement(
                  'a',
                  { className: centerClass, onClick: function onClick(evt) {
                      return _this2.updateAlign(evt, 'center');
                    } },
                  React.createElement(FontAwesomeIcon, { icon: 'align-center', size: '1x' })
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'level-item' },
              React.createElement(
                'p',
                { className: 'control' },
                React.createElement(
                  'a',
                  { className: rightClass, onClick: function onClick(evt) {
                      return _this2.updateAlign(evt, 'right');
                    } },
                  React.createElement(FontAwesomeIcon, { icon: 'align-right', size: '1x' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Alignment;
}(React.Component);

Alignment.propTypes = {
  propertyValues: PropTypes.object
};

export default Alignment;