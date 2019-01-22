var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { addRow as _addRow, selectContent as _selectContent, loadSitePage as _loadSitePage } from "../redux/actions/index";
import GridRow from './GridRow';
import GridDropTarget from './GridDropTarget';
import GridDragSource from './GridDragSource';
import { connect } from "react-redux";
import { DraggableTypes } from '../Constants';
import DropZone from './DropZone';

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
  }

  _createClass(Grid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var api = this.props.api;
      var site = this.props.site;
      api.loadSitePage(site.id, this.props.currentPage, this.props.loadSitePage);
    }
  }, {
    key: 'editableRows',
    value: function editableRows() {
      var self = this;
      var selectContent = this.props.selectContent;
      var activeState = this.props.activeState;
      var rows = this.props.rows.map(function (row, index) {
        return React.createElement(
          GridDropTarget,
          { key: index, targetId: index.toString(), dropTargetType: DraggableTypes.LAYOUT, dropFunction: self.props.addRow },
          React.createElement(
            GridDragSource,
            { key: 'gds-' + index, dragSourceType: DraggableTypes.LAYOUT, sourceId: index.toString(), selectContent: selectContent, activeState: activeState },
            React.createElement(GridRow, Object.assign({ key: 'gridrow-' + index, row: row, rowId: index }, self.props))
          )
        );
      });
      return rows;
    }
  }, {
    key: 'nonEditableRows',
    value: function nonEditableRows() {
      var self = this;
      var rows = this.props.rows.map(function (row, index) {
        return React.createElement(GridRow, Object.assign({ key: 'gridrow-' + index, row: row, rowId: index }, self.props));
      });
      return rows;
    }
  }, {
    key: 'render',
    value: function render() {
      var editable = this.props.editable != null && this.props.editable == true;
      var self = this;
      var rows = [];
      if (editable == true) {
        rows = this.editableRows();
      } else {
        rows = this.nonEditableRows();
      }
      return React.createElement(
        'div',
        { className: 'column' },
        rows.length > 0 && rows,
        rows.length == 0 && React.createElement(
          GridDropTarget,
          { targetId: "-1", dropTargetType: DraggableTypes.LAYOUT, dropFunction: self.props.addRow },
          React.createElement(DropZone, null)
        )
      );
    }
  }]);

  return Grid;
}(React.Component);

Grid.propTypes = {
  rows: PropTypes.array,
  activeState: PropTypes.object,
  site: PropTypes.object,
  currentPage: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, activeState: state.activeState, currentPage: state.currentPage };
}

function mapDispatchToProps(dispatch) {
  return {
    addRow: function addRow(row) {
      return dispatch(_addRow(row));
    },
    selectContent: function selectContent(content) {
      return dispatch(_selectContent(content));
    },
    loadSitePage: function loadSitePage(page) {
      return dispatch(_loadSitePage(page));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Grid);