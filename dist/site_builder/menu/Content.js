var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import IconTile from './IconTile';
import GridDragSource from '../site/GridDragSource';
import { DraggableTypes } from '../Constants';
import cloneDeep from 'lodash/cloneDeep';

var CONTENT_TYPES = [{ name: 'Button', icon: 'square' }, { name: 'Divider', icon: 'minus' }, { name: 'Text', icon: 'font' }, { name: 'Html', icon: 'code' }, { name: 'Image', icon: 'image' }];

var ROW_LENGTH = 3;

var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
  }

  _createClass(Content, [{
    key: 'splitArray',
    value: function splitArray(_splitArray, sourceArray) {
      var i = 0;
      var newArray = [];
      while (i < ROW_LENGTH && sourceArray.length > 0) {
        newArray.push(sourceArray.shift());
        i++;
      }
      _splitArray.push(newArray);
      if (sourceArray.length > 0) {
        _splitArray = this.splitArray(_splitArray, sourceArray);
      }
      return _splitArray;
    }
  }, {
    key: 'renderContentRow',
    value: function renderContentRow(contentArray, rowIndex) {
      return contentArray.map(function (d, index) {
        var key = rowIndex + "-" + index;
        return React.createElement(
          'div',
          { className: 'column is-4', key: key },
          React.createElement(
            GridDragSource,
            { sourceId: d.name, dragSourceType: DraggableTypes.CONTENT, handle: false },
            React.createElement(IconTile, { name: d.name, icon: d.icon })
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var split = this.splitArray([], cloneDeep(CONTENT_TYPES));
      var self = this;
      var content = split.map(function (c, index) {
        var key = "content-row-" + index;
        return React.createElement(
          'div',
          { className: 'columns', key: key },
          self.renderContentRow(c, key)
        );
      });
      return React.createElement(
        'div',
        null,
        content
      );
    }
  }]);

  return Content;
}(React.Component);

export default Content;