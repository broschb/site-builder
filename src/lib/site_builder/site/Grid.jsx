import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { addRow, selectContent, loadSitePage } from "../redux/actions/index";
import GridRow from './GridRow';
import GridDropTarget from './GridDropTarget';
import GridDragSource from './GridDragSource';
import { connect } from "react-redux";
import { DraggableTypes } from '../Constants';
import DropZone from './DropZone';


class Grid extends React.Component {

  constructor(props) {
    super(props);
  }


  editableRows(){
    var self = this;
    var selectContent = this.props.selectContent;
    var activeState = this.props.activeState;
    var rows = this.props.rows.map(function (row, index) {
      return (
        <GridDropTarget key={index} targetId={index.toString()} dropTargetType={DraggableTypes.LAYOUT} dropFunction={self.props.addRow}>
          <GridDragSource key={`gds-${index}`} dragSourceType={DraggableTypes.LAYOUT} sourceId={index.toString()} selectContent={selectContent} activeState={activeState}>
            <GridRow key={`gridrow-${index}`} row={row} rowId={index} {...self.props}/>
          </GridDragSource>
        </GridDropTarget>

      )
    })
    return rows;
  }

  nonEditableRows() {
    var self = this;
    var rows = this.props.rows.map(function (row, index) {
      return (
            <GridRow key={`gridrow-${index}`} row={row} rowId={index} {...self.props}/>
      )
    })
    return rows;
  }

  render() {
    var editable = this.props.editable != null && this.props.editable == true;
    var self = this;
    var rows = [];
    if(editable == true){
      rows = this.editableRows();
    }else{
      rows = this.nonEditableRows();
    }
    return(
      <div className="column">
        {rows.length > 0 && rows}
        {rows.length == 0 && (
          <GridDropTarget targetId={"-1"} dropTargetType={DraggableTypes.LAYOUT} dropFunction={self.props.addRow}>
            <DropZone />
          </GridDropTarget>
        )}
      </div>
    )
  }
}

Grid.propTypes = {
  rows: PropTypes.array,
  activeState: PropTypes.object,
  site: PropTypes.object,
  currentPage: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, activeState: state.activeState, currentPage: state.currentPage }
}

function mapDispatchToProps(dispatch) {
  return {
    addRow: row => dispatch(addRow(row)),
    selectContent: content => dispatch(selectContent(content)),
    loadSitePage: page => dispatch(loadSitePage(page))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Grid)