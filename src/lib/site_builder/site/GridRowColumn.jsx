import React from 'react';
import { DraggableTypes } from '../Constants';
import GridDropTarget from './GridDropTarget';
import { compose } from 'redux';
import { connect } from "react-redux";
import { addContent, selectContent, updateContentProps } from "../redux/actions/index";
import PropTypes from 'prop-types';
import GridRowColumnCell from './GridRowColumnCell';

class GridRowColumn extends React.Component {

  constructor(props) {
    super(props);
  }

  renderColumnItems(){
    return(
      this.props.columnProps.items.map((item, index) => {
        var key = `${item.derivedId}.${index}`
        return(
          <div key={key}>
            <GridRowColumnCell key={`grcc-${key}`} item={item} 
                               addContent={this.props.addContent} 
                               selectContent={this.props.selectContent}
                               activeState={this.props.activeState}
                               updateContentProps={this.props.updateContentProps}
                               {...this.props}/>
          </div>
        )
      })
    )
  }

  render() {
    var editable = this.props.editable != null && this.props.editable == true;
    var key = `${this.props.rowId}.${this.props.columnId}`
    return (
      <div>
        {editable && this.props.columnProps.items.length == 0 && (<GridDropTarget key={`gdt-${key}`} targetId={`${this.props.rowId}.${this.props.columnId}`} dropTargetType={DraggableTypes.CONTENT} dropFunction={this.props.addContent}>
          <p className="notification is-primary">Grid Column</p>
        </GridDropTarget>)}
        {this.renderColumnItems()}
      </div>
    )
  }
}

GridRowColumn.propTypes = {
  rowId: PropTypes.number.isRequired,
  columnProps: PropTypes.object.isRequired,
  columnId: PropTypes.number.isRequired,
  activeState: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return { activeState: state.activeState }
}

function mapDispatchToProps(dispatch) {
  return {
    addContent: content => dispatch(addContent(content)),
    selectContent: content => dispatch(selectContent(content)),
    updateContentProps: content => dispatch(updateContentProps(content))
    
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(GridRowColumn);