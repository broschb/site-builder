var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import './GridDragSource.css';

var GridDragSourceRenderer = function (_React$Component) {
  _inherits(GridDragSourceRenderer, _React$Component);

  function GridDragSourceRenderer(props) {
    _classCallCheck(this, GridDragSourceRenderer);

    var _this = _possibleConstructorReturn(this, (GridDragSourceRenderer.__proto__ || Object.getPrototypeOf(GridDragSourceRenderer)).call(this, props));

    _this.mouseEnter = function (event, func, hoveredIds) {
      event.stopPropagation();
      if (_this.computedSelected() == false) {
        func(_this.props.sourceId);
      }
    };

    _this.mouseLeave = function (event, func, hoveredIds) {
      event.stopPropagation();
      if (_this.computedSelected() == false) {
        func(_this.props.sourceId);
      }
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(GridDragSourceRenderer, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.stopPropagation();
      if (this.props.selectContent != null) {
        this.props.selectContent({ id: this.props.sourceId });
      }
    }
  }, {
    key: 'computedSelected',
    value: function computedSelected() {
      return this.props.activeState != null && this.props.activeState.id == this.props.sourceId;
    }
  }, {
    key: 'computeHovered',
    value: function computeHovered(hoveredIds) {
      var hov = hoveredIds.indexOf(this.props.sourceId) > -1;
      return hov;
    }
  }, {
    key: 'DragHandleRender',
    value: function DragHandleRender(addId, removeId, hoveredIds, sourceId) {
      var _this2 = this;

      var hovered = this.computeHovered(hoveredIds);
      var selected = this.computedSelected();

      if (hoveredIds.length > 0) {
        var longest = hoveredIds.reduce(function (a, b) {
          return a.split(".").length > b.split(".").length ? a : b;
        });
        if (longest != null && longest == this.props.sourceId) {
          hovered = true;
        } else {
          hovered = false;
        }
      }

      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging;

      var handle = this.props.handle == false || isDragging ? false : true;
      var cls = hovered ? 'draggable' : '';
      cls = selected ? 'selected' : cls;
      return React.createElement(
        'div',
        { onClick: function onClick(event) {
            return _this2.handleClick(event);
          }, className: cls, onMouseOver: function onMouseOver(event) {
            return _this2.mouseEnter(event, addId, hoveredIds);
          }, onMouseLeave: function onMouseLeave(event) {
            return _this2.mouseLeave(event, removeId, hoveredIds);
          } },
        hovered && !selected && React.createElement(
          'div',
          { className: 'drag-wrapper' },
          ' ',
          connectDragSource(React.createElement('span', { className: 'grippy' })),
          ' ',
          this.props.children,
          ' '
        ),
        (!hovered || selected) && this.props.children
      );
    }
  }, {
    key: 'DragSourceConditional',
    value: function DragSourceConditional() {
      var _props2 = this.props,
          connectDragSource = _props2.connectDragSource,
          isDragging = _props2.isDragging;

      var handle = this.props.handle == false ? false : true;
      return this.DragHandleRender(this.props.addId, this.props.removeId, this.props.hoveredIds, this.props.sourceId);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.removeId(this.props.sourceId);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.DragSourceConditional();
    }
  }]);

  return GridDragSourceRenderer;
}(React.Component);

GridDragSourceRenderer.propTypes = {
  sourceId: PropTypes.string.isRequired,
  dragSourceType: PropTypes.string.isRequired,
  selectContent: PropTypes.func,
  handle: PropTypes.bool,
  activeState: PropTypes.object,
  connectDragSource: PropTypes.func
};

export default GridDragSourceRenderer;