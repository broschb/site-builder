var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import BaseContentType from './BaseContentType';

var Text = function (_BaseContentType) {
  _inherits(Text, _BaseContentType);

  function Text(props) {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this.handleEditorChange = _this.handleEditorChange.bind(_this);
    return _this;
  }

  _createClass(Text, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(e) {
      this.props.updateContentProps({
        derivedId: this.props.derivedId,
        itemType: this.props.item.itemProperties.itemType,
        itemProperties: { value: e.target.getContent() },
        itemId: 'text_value'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var value = '<p>Enter Text Here</p>';
      if (this.props.item.itemProperties.text_value != null) {
        value = this.props.item.itemProperties.text_value.value;
      }
      return React.createElement(
        'div',
        null,
        React.createElement(TinyMCE, {
          content: value,
          config: {
            inline: true,
            menubar: false,
            plugins: 'autolink link lists textcolor colorpicker',
            toolbar1: 'fontselect fontsizeselect | bold italic underline | numlist bullist',
            toolbar2: 'alignleft aligncenter alignright | forecolor backcolor | link unlink image '
          },
          onChange: this.handleEditorChange
        })
      );
    }
  }]);

  return Text;
}(BaseContentType);

export default Text;