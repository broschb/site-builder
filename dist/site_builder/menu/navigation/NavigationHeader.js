var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from "react-redux";
import PageSelector from './PageSelector';
import { loadSitePage as _loadSitePage } from "../../redux/actions/index";

var NavigationHeader = function (_React$Component) {
  _inherits(NavigationHeader, _React$Component);

  function NavigationHeader(props) {
    _classCallCheck(this, NavigationHeader);

    var _this = _possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).call(this, props));

    _this.savePage = _this.savePage.bind(_this);
    _this.newPage = _this.newPage.bind(_this);
    _this.selectPage = _this.selectPage.bind(_this);
    return _this;
  }

  _createClass(NavigationHeader, [{
    key: 'savePage',
    value: function savePage() {
      this.props.api.savePage(this.props.site.id, this.props.currentPage, this.props.rows, function () {});
    }
  }, {
    key: 'newPage',
    value: function newPage() {
      this.props.api.newPage(this.props.site.id, this.props.loadSitePage);
    }
  }, {
    key: 'selectPage',
    value: function selectPage(pageId) {
      this.props.api.loadSitePage(this.props.site.id, pageId, this.props.loadSitePage);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(PageSelector, Object.assign({ newPage: this.newPage, selectPage: this.selectPage }, this.props)),
        React.createElement(
          'a',
          { className: 'button is-success', onClick: this.savePage },
          ' Save '
        )
      );
    }
  }]);

  return NavigationHeader;
}(React.Component);

NavigationHeader.propTypes = {
  rows: PropTypes.array,
  api: PropTypes.object,
  currentPage: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, currentPage: state.currentPage };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSitePage: function loadSitePage(page) {
      return dispatch(_loadSitePage(page));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(NavigationHeader);