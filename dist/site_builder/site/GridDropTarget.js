var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import DropZone from './DropZone';

var rowTarget = {
  drop: function drop(props, monitor, component) {
    var payload = { item: monitor.getItem(), targetId: props.targetId, targetType: props.dropTargetType };
    props.dropFunction(payload);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var GridDropTarget = function (_React$Component) {
  _inherits(GridDropTarget, _React$Component);

  function GridDropTarget(props) {
    _classCallCheck(this, GridDropTarget);

    return _possibleConstructorReturn(this, (GridDropTarget.__proto__ || Object.getPrototypeOf(GridDropTarget)).call(this, props));
  }

  _createClass(GridDropTarget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDropTarget = _props.connectDropTarget,
          isOver = _props.isOver;

      return connectDropTarget(React.createElement(
        'div',
        null,
        isOver == true && React.createElement(DropZone, null),
        this.props.children
      ));
    }
  }]);

  return GridDropTarget;
}(React.Component);

GridDropTarget.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  dropFunction: PropTypes.func.isRequired,
  dropTargetType: PropTypes.string.isRequired,
  targetId: PropTypes.string.isRequired
};

export default compose(DropTarget(function (props) {
  return props.dropTargetType;
}, rowTarget, collect))(GridDropTarget);