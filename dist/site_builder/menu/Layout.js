var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import LayoutItem from './LayoutItem';

var GRID_TYPES = [{ id: '12' }, { id: '6_6' }, { id: '4_8' }, { id: '8_4' }, { id: '4_4_4' }, { id: '3_3_3_3' }];

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: 'renderGridRow',
    value: function renderGridRow(grid) {
      return React.createElement(LayoutItem, { key: grid.id, grid: grid });
    }
  }, {
    key: 'render',
    value: function render() {
      var grids = [];
      for (var i = 0; i < GRID_TYPES.length; i++) {
        var key = "gridType" + i;
        grids.push(this.renderGridRow(GRID_TYPES[i]));
      }

      return React.createElement(
        'div',
        null,
        grids
      );
    }
  }]);

  return Layout;
}(React.Component);

export default Layout;