var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { compose } from 'redux';
import './GridDragSource.css';
import { SharedSiteConsumer } from './SharedSiteContext';
import GridDragSourceRenderer from './GridDragSourceRenderer';

var gridDragItemSource = {
  beginDrag: function beginDrag(props) {
    return { layout: props.sourceId, sourceId: props.sourceId };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var GridDragSource = function (_React$Component) {
  _inherits(GridDragSource, _React$Component);

  function GridDragSource(props) {
    _classCallCheck(this, GridDragSource);

    return _possibleConstructorReturn(this, (GridDragSource.__proto__ || Object.getPrototypeOf(GridDragSource)).call(this, props));
  }

  _createClass(GridDragSource, [{
    key: 'DragSourceConditional',
    value: function DragSourceConditional() {
      var _this2 = this;

      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging;

      var handle = this.props.handle == false ? false : true;
      if (!handle) {
        return connectDragSource(React.createElement(
          'div',
          null,
          this.props.children
        ));
      }
      return React.createElement(
        SharedSiteConsumer,
        { key: this.props.sourceId },
        function (_ref) {
          var addId = _ref.addId,
              removeId = _ref.removeId,
              hoveredIds = _ref.hoveredIds;
          return React.createElement(GridDragSourceRenderer, Object.assign({ addId: addId, removeId: removeId, hoveredIds: hoveredIds }, _this2.props));
        }
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.DragSourceConditional();
    }
  }]);

  return GridDragSource;
}(React.Component);

GridDragSource.propTypes = {
  sourceId: PropTypes.string.isRequired,
  dragSourceType: PropTypes.string.isRequired,
  selectContent: PropTypes.func,
  handle: PropTypes.bool,
  activeState: PropTypes.object
};

export default compose(DragSource(function (props) {
  return props.dragSourceType;
}, gridDragItemSource, collect))(GridDragSource);