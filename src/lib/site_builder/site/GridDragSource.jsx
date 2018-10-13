import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { compose } from 'redux';
import './GridDragSource.css'
import {SharedSiteConsumer} from './SharedSiteContext';
import GridDragSourceRenderer from './GridDragSourceRenderer';

const gridDragItemSource = {
  beginDrag(props) {
    return { layout: props.sourceId, sourceId: props.sourceId };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class GridDragSource extends React.Component {
  
  constructor(props) {
    super(props);
  }

  DragSourceConditional(){
    const { connectDragSource, isDragging } = this.props;
    var handle = this.props.handle == false ? false : true;
    if(!handle){
      return (connectDragSource(
        <div>
          {this.props.children}
        </div>
      ))
    }
    return <SharedSiteConsumer key={this.props.sourceId}>
      {({ addId, removeId, hoveredIds }) => (
        <GridDragSourceRenderer addId={addId} removeId={removeId} hoveredIds={hoveredIds} {...this.props}/>
      )}
    </SharedSiteConsumer>
  }

  render (){
    return (
      this.DragSourceConditional()
    );
  }
}

GridDragSource.propTypes = {
  sourceId: PropTypes.string.isRequired,
  dragSourceType: PropTypes.string.isRequired,
  selectContent: PropTypes.func,
  handle: PropTypes.bool,
  activeState: PropTypes.object
};

export default compose(
  DragSource((props) => { return props.dragSourceType; }, gridDragItemSource, collect),
)(GridDragSource);