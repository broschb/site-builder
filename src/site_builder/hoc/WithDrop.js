import React from 'react';
import { DraggableTypes } from '../Constants';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';

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

const withDrop = (WrappedComponent) => {
  class WithDrop extends React.Component {
    render() {
       const { connectDropTarget, isOver } = this.props;
      return connectDropTarget(
        <WrappedComponent { ...this.props }/>
      );
    }
  }

  return WithDrop;
};

export default compose(
  DropTarget(DraggableTypes.LAYOUT, rowTarget, collect),
)(withDrop);
// export default withDrop;