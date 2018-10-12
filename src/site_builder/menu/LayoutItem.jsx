import React from 'react';
import PropTypes from 'prop-types';
import { DraggableTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const layoutItemSource = {
  beginDrag(props) {
    return {layout: props.grid};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class LayoutItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grid: this.props.grid };
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    const grid = this.state.grid;
    return (
      connectDragSource(
        <div className="columns is-mobile">
          {this.renderGridRow(grid)}
        </div>
    )
    )
  }

  renderGridRow(grid) {
    var parts = grid.id.split("_")
    return (
      parts.map((item, index) => {
        var intSize = parseInt(item)
        var key = grid.id + "-" + index
        var className = `column is-${item}`
        return (
          <div key={key} className={className}>
            <p className="notification is-primary"></p>
          </div>
        )
      })
    )
  }
}

LayoutItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
// export default LayoutItem
export default DragSource(DraggableTypes.LAYOUT, layoutItemSource, collect)(LayoutItem);