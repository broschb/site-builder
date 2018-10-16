var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import PropTypes from 'prop-types';
import PropertySidebar from './PropertySidebar';
import Menu from './Menu';
import { selectContent as _selectContent, updateContentProps as _updateContentProps } from "../redux/actions/index";

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var activeId = this.props.activeState != null && this.props.activeState.id != null;
      return React.createElement(
        "div",
        null,
        !activeId && React.createElement(Menu, null),
        activeId && React.createElement(PropertySidebar, { activeState: this.props.activeState, selectContent: this.props.selectContent, updateContentProps: this.props.updateContentProps })
      );
    }
  }]);

  return Sidebar;
}(React.Component);

Sidebar.propTypes = {
  rows: PropTypes.array,
  activeState: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    selectContent: function selectContent(content) {
      return dispatch(_selectContent(content));
    },
    updateContentProps: function updateContentProps(content) {
      return dispatch(_updateContentProps(content));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return { rows: state.rows, activeState: state.activeState };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);