import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from "react-redux";
import PageSelector from './PageSelector';
import {loadSitePage } from "../../redux/actions/index";

class NavigationHeader extends React.Component {

  constructor(props){
    super(props);
    this.savePage = this.savePage.bind(this);
    this.newPage = this.newPage.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  savePage() {
    this.props.api.savePage(this.props.site.id, this.props.currentPage, this.props.rows, function(){});
  }

  newPage(){
    this.props.api.newPage(this.props.site.id, this.props.loadSitePage);
  }

  selectPage(pageId){
    this.props.api.loadSitePage(this.props.site.id, pageId, this.props.loadSitePage);
  }

  render() {
    return (
      <div>
        <PageSelector newPage={this.newPage} selectPage={this.selectPage} {...this.props}/>
        <a className="button is-success" onClick={this.savePage}> Save </a>
      </div>
    )
  }
}

NavigationHeader.propTypes = {
  rows: PropTypes.array,
  api: PropTypes.object,
  currentPage: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, currentPage: state.currentPage}
}

function mapDispatchToProps(dispatch) {
  return {
    loadSitePage: page => dispatch(loadSitePage(page))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(NavigationHeader)