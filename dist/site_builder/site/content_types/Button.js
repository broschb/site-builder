var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.handleEditorChange = _this.handleEditorChange.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(e) {
      this.props.updateContentProps({
        derivedId: this.props.derivedId,
        itemType: this.props.item.itemProperties.itemType,
        itemProperties: { value: e.target.getContent() },
        itemId: 'button_value'
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var editable = this.props.editable != null && this.props.editable == true;
      var alignmentClass = "";
      var value = '<p>Enter Text Here</p>';
      if (this.props.item.itemProperties.button_value != null) {
        value = this.props.item.itemProperties.button_value.value;
      }

      if (this.props.item.itemProperties.button_alignment != null) {
        if (this.props.item.itemProperties.button_alignment.align == "right") {
          alignmentClass = "is-pulled-right";
        } else if (this.props.item.itemProperties.button_alignment.align == "left") {
          alignmentClass = "is-pulled-left";
        }
      }
      return React.createElement(
        'div',
        { className: alignmentClass },
        React.createElement(
          'a',
          { className: 'button' },
          editable == true && React.createElement(TinyMCE, {
            key: this.props.derivedId,
            content: value,
            config: {
              inline: true,
              menubar: false,
              plugins: 'textcolor colorpicker',
              toolbar1: 'fontselect fontsizeselect forecolor | bold italic underline'
            },
            onChange: this.handleEditorChange
          }),
          editable == false && value
        )
      );
    }
  }]);

  return Button;
}(React.Component);

export default Button;