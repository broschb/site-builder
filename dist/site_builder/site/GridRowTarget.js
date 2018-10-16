var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { DraggableTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import GridRow from './GridRow';

var rowTarget = {
  drop: function drop(props, monitor, component) {
    props.addRow(monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var GridRowTarget = function (_React$Component) {
  _inherits(GridRowTarget, _React$Component);

  function GridRowTarget(props) {
    _classCallCheck(this, GridRowTarget);

    return _possibleConstructorReturn(this, (GridRowTarget.__proto__ || Object.getPrototypeOf(GridRowTarget)).call(this, props));
  }

  _createClass(GridRowTarget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDropTarget = _props.connectDropTarget,
          isOver = _props.isOver;

      return connectDropTarget(React.createElement(
        'div',
        null,
        this.props.rowType != null && React.createElement(GridRow, { rowType: this.props.rowType }),
        this.props.rowType == null && React.createElement(
          'div',
          null,
          'Drop Layout Here'
        )
      ));
    }
  }]);

  return GridRowTarget;
}(React.Component);

GridRowTarget.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  addRow: PropTypes.func.isRequired
};

export default compose(DropTarget(DraggableTypes.LAYOUT, rowTarget, collect))(GridRowTarget);