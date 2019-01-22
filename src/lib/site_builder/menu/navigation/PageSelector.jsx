import React from 'react';
import PropTypes from 'prop-types';

class PageSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false
    } 
    this.expand = this.expand.bind(this);
    this.select = this.select.bind(this);
  }

  expand() {
    this.setState({expanded: !this.state.expanded})
  }

  select(action, page){
    this.expand();
    action(page.id)
  }


  render() {
    var dropdownClass = "dropdown " + (this.state.expanded ? "is-active " : " ")
    var self = this;
    var pages = this.props.site.pages.map(function (page, index) {
      var itemClass = "dropdown-item " + ((page.id == self.props.currentPage) ? "is-active " : " ")
      return (
        <a key={page.id} href="#" className={itemClass} onClick={() => self.select(self.props.selectPage, page)}>
          {page.name}
        </a>
      )
    })

    return (
        <div className={dropdownClass}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.expand}>
              <span>Dropdown button</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {pages}
              <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item" onClick={() => self.select(self.props.newPage, {id: -1})}>
                New Page
              </a>
            </div>
          </div>
        </div>
    )
  }
}

PageSelector.propTypes = {
  selectPage: PropTypes.func,
  newPage: PropTypes.func,
  currentPage: PropTypes.number,
  pages: PropTypes.object
};

export default PageSelector