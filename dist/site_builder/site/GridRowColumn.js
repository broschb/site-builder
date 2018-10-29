var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { DraggableTypes } from '../Constants';
import GridDropTarget from './GridDropTarget';
import { compose } from 'redux';
import { connect } from "react-redux";
import { addContent as _addContent, selectContent as _selectContent, updateContentProps as _updateContentProps } from "../redux/actions/index";
import PropTypes from 'prop-types';
import GridRowColumnCell from './GridRowColumnCell';

var GridRowColumn = function (_React$Component) {
  _inherits(GridRowColumn, _React$Component);

  function GridRowColumn(props) {
    _classCallCheck(this, GridRowColumn);

    return _possibleConstructorReturn(this, (GridRowColumn.__proto__ || Object.getPrototypeOf(GridRowColumn)).call(this, props));
  }

  _createClass(GridRowColumn, [{
    key: 'renderColumnItems',
    value: function renderColumnItems() {
      var _this2 = this;

      return this.props.columnProps.items.map(function (item, index) {
        var key = item.derivedId + '.' + index;
        return React.createElement(
          'div',
          { key: key },
          React.createElement(GridRowColumnCell, Object.assign({ key: 'grcc-' + key, item: item,
            addContent: _this2.props.addContent,
            selectContent: _this2.props.selectContent,
            activeState: _this2.props.activeState,
            updateContentProps: _this2.props.updateContentProps
          }, _this2.props))
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var editable = this.props.editable != null && this.props.editable == true;
      var key = this.props.rowId + '.' + this.props.columnId;
      return React.createElement(
        'div',
        null,
        editable && this.props.columnProps.items.length == 0 && React.createElement(
          GridDropTarget,
          { key: 'gdt-' + key, targetId: this.props.rowId + '.' + this.props.columnId, dropTargetType: DraggableTypes.CONTENT, dropFunction: this.props.addContent },
          React.createElement(
            'p',
            { className: 'notification is-primary' },
            'Grid Column'
          )
        ),
        this.renderColumnItems()
      );
    }
  }]);

  return GridRowColumn;
}(React.Component);

GridRowColumn.propTypes = {
  rowId: PropTypes.number.isRequired,
  columnProps: PropTypes.object.isRequired,
  columnId: PropTypes.number.isRequired,
  activeState: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return { activeState: state.activeState };
}

function mapDispatchToProps(dispatch) {
  return {
    addContent: function addContent(content) {
      return dispatch(_addContent(content));
    },
    selectContent: function selectContent(content) {
      return dispatch(_selectContent(content));
    },
    updateContentProps: function updateContentProps(content) {
      return dispatch(_updateContentProps(content));
    }

  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(GridRowColumn);