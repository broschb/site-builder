var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var PageSelector = function (_React$Component) {
  _inherits(PageSelector, _React$Component);

  function PageSelector(props) {
    _classCallCheck(this, PageSelector);

    var _this = _possibleConstructorReturn(this, (PageSelector.__proto__ || Object.getPrototypeOf(PageSelector)).call(this, props));

    _this.state = {
      expanded: false
    };
    _this.expand = _this.expand.bind(_this);
    _this.select = _this.select.bind(_this);
    return _this;
  }

  _createClass(PageSelector, [{
    key: 'expand',
    value: function expand() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'select',
    value: function select(action, page) {
      this.expand();
      action(page.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var dropdownClass = "dropdown " + (this.state.expanded ? "is-active " : " ");
      var self = this;
      var pages = this.props.site.pages.map(function (page, index) {
        var itemClass = "dropdown-item " + (page.id == self.props.currentPage ? "is-active " : " ");
        return React.createElement(
          'a',
          { key: page.id, href: '#', className: itemClass, onClick: function onClick() {
              return self.select(self.props.selectPage, page);
            } },
          page.name
        );
      });

      return React.createElement(
        'div',
        { className: dropdownClass },
        React.createElement(
          'div',
          { className: 'dropdown-trigger' },
          React.createElement(
            'button',
            { className: 'button', 'aria-haspopup': 'true', 'aria-controls': 'dropdown-menu', onClick: this.expand },
            React.createElement(
              'span',
              null,
              'Dropdown button'
            ),
            React.createElement(
              'span',
              { className: 'icon is-small' },
              React.createElement('i', { className: 'fas fa-angle-down', 'aria-hidden': 'true' })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'dropdown-menu', id: 'dropdown-menu', role: 'menu' },
          React.createElement(
            'div',
            { className: 'dropdown-content' },
            pages,
            React.createElement('hr', { className: 'dropdown-divider' }),
            React.createElement(
              'a',
              { href: '#', className: 'dropdown-item', onClick: function onClick() {
                  return self.select(self.props.newPage, { id: -1 });
                } },
              'New Page'
            )
          )
        )
      );
    }
  }]);

  return PageSelector;
}(React.Component);

PageSelector.propTypes = {
  selectPage: PropTypes.func,
  newPage: PropTypes.func,
  currentPage: PropTypes.number,
  pages: PropTypes.object
};

export default PageSelector;