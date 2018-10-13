import React from 'react';
import PropTypes from 'prop-types';
import { DraggableTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import GridRow from './GridRow';


const rowTarget = {
  drop(props, monitor, component) {
    props.addRow(monitor.getItem())
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GridRowTarget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div>
        {this.props.rowType != null && <GridRow rowType={this.props.rowType}/>}
        {this.props.rowType == null && <div>Drop Layout Here</div>}
      </div>
    )
  }
}

GridRowTarget.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  addRow: PropTypes.func.isRequired,
};

export default compose(
  DropTarget(DraggableTypes.LAYOUT, rowTarget, collect),
)(GridRowTarget);