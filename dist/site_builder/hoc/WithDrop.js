var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { DraggableTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';

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

var withDrop = function withDrop(WrappedComponent) {
  var WithDrop = function (_React$Component) {
    _inherits(WithDrop, _React$Component);

    function WithDrop() {
      _classCallCheck(this, WithDrop);

      return _possibleConstructorReturn(this, (WithDrop.__proto__ || Object.getPrototypeOf(WithDrop)).apply(this, arguments));
    }

    _createClass(WithDrop, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            connectDropTarget = _props.connectDropTarget,
            isOver = _props.isOver;

        return connectDropTarget(React.createElement(WrappedComponent, this.props));
      }
    }]);

    return WithDrop;
  }(React.Component);

  return WithDrop;
};

export default compose(DropTarget(DraggableTypes.LAYOUT, rowTarget, collect))(withDrop);
// export default withDrop;