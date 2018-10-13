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
    // this.handleClick = this.handleClick.bind(this);
  }

  // mouseEnter = (event, func, hoveredIds) => {
  //   event.stopPropagation();
  //   if (this.computedSelected() == false) {
  //     func(this.props.sourceId);
  //   }
    
  // }
  // mouseLeave = (event, func, hoveredIds) => {
  //   event.stopPropagation();
  //   if (this.computedSelected() == false) {
  //     func(this.props.sourceId);
  //   }
  // }

  // handleClick(event){
  //   event.stopPropagation();
  //   if(this.props.selectContent != null){
  //     this.props.selectContent({ id: this.props.sourceId });
  //   }
  // }

  // computedSelected(){
  //   return this.props.activeState != null && (this.props.activeState.id == this.props.sourceId);
  // }

  // computeHovered(hoveredIds){
  //   var hov =  hoveredIds.indexOf(this.props.sourceId) > -1
  //   return hov;
  // }

  // DragHandleRender(addId, removeId, hoveredIds, sourceId){
  //   var hovered = this.computeHovered(hoveredIds);
  //   var selected = this.computedSelected();
  
  //   if(hoveredIds.length > 0){
  //     var longest = hoveredIds.reduce(function (a, b) { return a.split(".").length > b.split(".").length ? a : b; });
  //     if (longest != null && longest == this.props.sourceId) {
  //       hovered = true;
  //     } else {
  //       hovered = false;
  //     } 
  //   }

  //   const { connectDragSource, isDragging } = this.props;
  //   var handle = (this.props.handle == false || isDragging) ? false : true;
  //   var cls = hovered ? 'draggable' : '';
  //   cls = selected ? 'selected' : cls;
  //   return(
  //     <div onClick={(event) =>this.handleClick(event)} className={cls} onMouseOver={(event) => this.mouseEnter(event, addId, hoveredIds)} onMouseOut={(event) => this.mouseLeave(event, removeId, hoveredIds)}>
  //       {(hovered && !selected) && (<div className='drag-wrapper'> {connectDragSource(
  //         <span className="grippy"></span>
  //       )} {this.props.children} </div>)}
  //       {(!hovered || selected) && (this.props.children)}
  //     </div>
  //   )

  // }

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
        // this.DragHandleRender(addId, removeId, hoveredIds, this.props.sourceId)
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