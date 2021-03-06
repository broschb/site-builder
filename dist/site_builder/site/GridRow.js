var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import GridRowColumn from './GridRowColumn';
import PropTypes from 'prop-types';
import './GridRow.css';

var GridRow = function (_React$Component) {
  _inherits(GridRow, _React$Component);

  function GridRow(props) {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).call(this, props));
  }

  _createClass(GridRow, [{
    key: 'renderColumns',
    value: function renderColumns() {
      var _this2 = this;

      var self = this;
      var row = this.props.row;
      var parts = row.layoutId.split("_");
      return parts.map(function (item, index) {
        var intSize = parseInt(item);
        var key = _this2.props.rowId + "-" + row.layoutId + "-" + index;
        var className = 'column is-' + item + ' site-column';
        return React.createElement(
          'div',
          { key: key, className: className },
          React.createElement(GridRowColumn, Object.assign({ key: 'grc-' + _this2.props.rowId + '.' + index, rowId: _this2.props.rowId, columnId: index, columnProps: row.columns[index] }, self.props))
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //TODO https://css-tricks.com/almanac/properties/b/background-position/
      var imgUrl = '';
      if (this.props.row.item.itemProperties.image != null) {
        imgUrl = this.props.row.item.itemProperties.image.url;
      }
      var divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover', //contain vs cover
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top'
      };
      return React.createElement(
        'div',
        { style: divStyle, className: 'columns is-mobile' },
        this.props.row && this.renderColumns()
      );
    }
  }]);

  return GridRow;
}(React.Component);

GridRow.propTypes = {
  rowId: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired
};

export default GridRow;