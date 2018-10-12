import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import DropZone from './DropZone';


const rowTarget = {
  drop(props, monitor, component) {
    var payload = {item: monitor.getItem(), targetId: props.targetId, targetType: props.dropTargetType}
    props.dropFunction(payload)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GridDropTarget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div>
        {isOver == true && <DropZone/>}
        {this.props.children}
      </div>
    )
  }
}

GridDropTarget.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  dropFunction: PropTypes.func.isRequired,
  dropTargetType: PropTypes.string.isRequired,
  targetId: PropTypes.string.isRequired,
};

export default compose(
  DropTarget((props) => { return props.dropTargetType; }, rowTarget, collect),
)(GridDropTarget);