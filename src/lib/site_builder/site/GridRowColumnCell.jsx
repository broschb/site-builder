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

const Map = {
  "Button": Button,
  "Divider": Divider,
  "Html": Html,
  "Image": Image,
  "Text": Text
}

class GridRowColumnCell extends React.Component {

  constructor(props) {
    super(props);
  }

  renderEditableCell(){
    var Comp = Map[this.props.item.itemType]
    var selectContent = this.props.selectContent;
    var key = this.props.item.derivedId;
    return (
      <GridDropTarget key={`gdt-key`} targetId={this.props.item.derivedId} dropTargetType={DraggableTypes.CONTENT} dropFunction={this.props.addContent}>
        <GridDragSource key={`gds-${key}`} dragSourceType={DraggableTypes.CONTENT} sourceId={key} selectContent={selectContent} activeState={this.props.activeState}>
          <Comp key={`item-${key}`} item={this.props.item} derivedId={key} clickHandler={selectContent} updateContentProps={this.props.updateContentProps} {...this.props}/>
        </GridDragSource>
      </GridDropTarget>
    )
  }

  renderNonEditableCell(){
    var Comp = Map[this.props.item.itemType]
    var selectContent = this.props.selectContent;
    var key = this.props.item.derivedId;
    return(
      <Comp key={`item-${key}`} item={this.props.item} derivedId={key} clickHandler={selectContent} updateContentProps={this.props.updateContentProps} {...this.props}/>
    )
  }

  render() {
    var editable = this.props.editable != null && this.props.editable == true;
    return (
      <div>
        TODO handle editable in comps
        {editable == true && this.renderEditableCell()}
        {editable == false && this.renderNonEditableCell()}
      </div>
    )
  }
}

GridRowColumnCell.propTypes = {
  item: PropTypes.object.isRequired,
  addContent: PropTypes.func.isRequired,
  selectContent: PropTypes.func.isRequired,
  activeState: PropTypes.object,
  updateContentProps: PropTypes.func
};

export default compose(
)(GridRowColumnCell);