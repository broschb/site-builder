var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from 'prop-types';
import { ContentProperties } from '../site/content_types/ContentProperties';
import PropertyType from '../site/content_types/property_types/PropertyType';

var PropertySidebar = function (_React$Component) {
  _inherits(PropertySidebar, _React$Component);

  function PropertySidebar() {
    _classCallCheck(this, PropertySidebar);

    return _possibleConstructorReturn(this, (PropertySidebar.__proto__ || Object.getPrototypeOf(PropertySidebar)).apply(this, arguments));
  }

  _createClass(PropertySidebar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var itemType = this.props.activeState.item.itemType;
      var item = this.props.activeState.item;
      var itemProps = ContentProperties[itemType];
      var propKeys = Object.keys(itemProps);
      var properties = propKeys.map(function (key, index) {
        var type = key.split("_")[0];
        return React.createElement(
          'div',
          { key: key + '_' + item.derivedId, className: 'panel-block' },
          React.createElement(PropertyType, { type: type, typeProperties: itemProps[key], propertyValues: item, updateContentProps: _this2.props.updateContentProps })
        );
      });

      return React.createElement(
        'nav',
        { className: 'panel' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          React.createElement(
            'nav',
            { className: 'level' },
            React.createElement(
              'div',
              { className: 'level-left' },
              React.createElement(
                'div',
                { className: 'level-item' },
                itemType
              )
            ),
            React.createElement(
              'div',
              { className: 'level-right' },
              React.createElement(
                'div',
                { className: 'level-item' },
                React.createElement(
                  'button',
                  { className: 'button is_small is-link is-outlined is-fullwidth', onClick: function onClick() {
                      return _this2.props.selectContent({ id: null });
                    } },
                  'close'
                )
              )
            )
          )
        ),
        properties
      );
    }
  }]);

  return PropertySidebar;
}(React.Component);

PropertySidebar.propTypes = {
  activeState: PropTypes.object.isRequired,
  selectContent: PropTypes.func.isRequired,
  updateContentProps: PropTypes.func.isRequired
};

export default PropertySidebar;