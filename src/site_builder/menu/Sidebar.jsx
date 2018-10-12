import React from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import PropTypes from 'prop-types';
import PropertySidebar from './PropertySidebar';
import Menu from './Menu';
import { selectContent, updateContentProps } from "../redux/actions/index";

class Sidebar extends React.Component {

  render() {
    var activeId = this.props.activeState != null && this.props.activeState.id != null;
    return (
      <div>
        { !activeId && <Menu/> }
        {activeId && <PropertySidebar activeState={this.props.activeState} selectContent={this.props.selectContent} updateContentProps={this.props.updateContentProps} /> }
      </div>
    );
  }
}

Sidebar.propTypes = {
  rows: PropTypes.array,
  activeState: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    selectContent: content => dispatch(selectContent(content)),
    updateContentProps: content => dispatch(updateContentProps(content))
  };
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, activeState: state.activeState }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Sidebar)