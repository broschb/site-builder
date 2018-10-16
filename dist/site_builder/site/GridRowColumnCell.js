var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { DraggableTypes } from '../Constants';
import GridDropTarget from './GridDropTarget';
import GridDragSource from './GridDragSource';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from './content_types/Button';
import Divider from './content_types/Divider';
import Html from './content_types/Html';
import Image from './content_types/Image';
import Text from './content_types/Text';

var Map = {
  "Button": Button,
  "Divider": Divider,
  "Html": Html,
  "Image": Image,
  "Text": Text
};

var GridRowColumnCell = function (_React$Component) {
  _inherits(GridRowColumnCell, _React$Component);

  function GridRowColumnCell(props) {
    _classCallCheck(this, GridRowColumnCell);

    return _possibleConstructorReturn(this, (GridRowColumnCell.__proto__ || Object.getPrototypeOf(GridRowColumnCell)).call(this, props));
  }

  _createClass(GridRowColumnCell, [{
    key: 'render',
    value: function render() {
      var Comp = Map[this.props.item.itemType];
      var selectContent = this.props.selectContent;
      var key = this.props.item.derivedId;
      return React.createElement(
        'div',
        null,
        React.createElement(
          GridDropTarget,
          { key: 'gdt-key', targetId: this.props.item.derivedId, dropTargetType: DraggableTypes.CONTENT, dropFunction: this.props.addContent },
          React.createElement(
            GridDragSource,
            { key: 'gds-' + key, dragSourceType: DraggableTypes.CONTENT, sourceId: key, selectContent: selectContent, activeState: this.props.activeState },
            React.createElement(Comp, { key: 'item-' + key, item: this.props.item, derivedId: key, clickHandler: selectContent, updateContentProps: this.props.updateContentProps })
          )
        )
      );
    }
  }]);

  return GridRowColumnCell;
}(React.Component);

GridRowColumnCell.propTypes = {
  item: PropTypes.object.isRequired,
  addContent: PropTypes.func.isRequired,
  selectContent: PropTypes.func.isRequired,
  activeState: PropTypes.object,
  updateContentProps: PropTypes.func
};

export default compose()(GridRowColumnCell);