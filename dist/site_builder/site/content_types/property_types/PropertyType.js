var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Alignment from './Alignment';
import Color from './Color';
import Image from './Image';
import Text from './Text';
import Html from './Html';
import './PropertyType.css';

var Map = {
  "Link": Link,
  "Alignment": Alignment,
  "Color": Color,
  "Image": Image,
  "Text": Text,
  "Html": Html
};

var PropertyType = function (_React$Component) {
  _inherits(PropertyType, _React$Component);

  function PropertyType() {
    _classCallCheck(this, PropertyType);

    return _possibleConstructorReturn(this, (PropertyType.__proto__ || Object.getPrototypeOf(PropertyType)).apply(this, arguments));
  }

  _createClass(PropertyType, [{
    key: 'changeHandler',
    value: function changeHandler(updatedProps) {
      this.props.updateContentProps({ derivedId: this.props.propertyValues.derivedId,
        itemType: this.props.propertyValues.itemType,
        itemProperties: updatedProps,
        itemId: this.props.typeProperties.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;
      var itemProps = this.props.propertyValues.itemProperties[this.props.typeProperties.id] || {};
      var Comp = Map[type];
      return React.createElement(
        'div',
        { className: 'full-width' },
        React.createElement(Comp, { display_name: this.props.typeProperties.display_name,
          propertyValues: itemProps,
          changeHandler: this.changeHandler.bind(this) })
      );
    }
  }]);

  return PropertyType;
}(React.Component);

PropertyType.propTypes = {
  type: PropTypes.string.isRequired,
  propertyValues: PropTypes.object,
  updateContentProps: PropTypes.func.isRequired,
  typeProperties: PropTypes.object.isRequired
};

export default PropertyType;