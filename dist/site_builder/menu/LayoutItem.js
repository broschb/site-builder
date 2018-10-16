var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { DraggableTypes } from '../Constants';
import { DragSource } from 'react-dnd';

var layoutItemSource = {
  beginDrag: function beginDrag(props) {
    return { layout: props.grid };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var LayoutItem = function (_React$Component) {
  _inherits(LayoutItem, _React$Component);

  function LayoutItem(props) {
    _classCallCheck(this, LayoutItem);

    var _this = _possibleConstructorReturn(this, (LayoutItem.__proto__ || Object.getPrototypeOf(LayoutItem)).call(this, props));

    _this.state = { grid: _this.props.grid };
    return _this;
  }

  _createClass(LayoutItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging;

      var grid = this.state.grid;
      return connectDragSource(React.createElement(
        'div',
        { className: 'columns is-mobile' },
        this.renderGridRow(grid)
      ));
    }
  }, {
    key: 'renderGridRow',
    value: function renderGridRow(grid) {
      var parts = grid.id.split("_");
      return parts.map(function (item, index) {
        var intSize = parseInt(item);
        var key = grid.id + "-" + index;
        var className = 'column is-' + item;
        return React.createElement(
          'div',
          { key: key, className: className },
          React.createElement('p', { className: 'notification is-primary' })
        );
      });
    }
  }]);

  return LayoutItem;
}(React.Component);

LayoutItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
// export default LayoutItem
export default DragSource(DraggableTypes.LAYOUT, layoutItemSource, collect)(LayoutItem);