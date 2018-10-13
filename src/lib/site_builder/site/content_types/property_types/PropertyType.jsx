import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Alignment from './Alignment';
import Color from './Color';
import Image from './Image';
import Text from './Text';
import Html from './Html';
import './PropertyType.css';

const Map = {
  "Link": Link,
  "Alignment": Alignment,
  "Color": Color,
  "Image": Image,
  "Text": Text,
  "Html": Html
}

class PropertyType extends React.Component {

  changeHandler(updatedProps) {
    this.props.updateContentProps({derivedId: this.props.propertyValues.derivedId, 
                                   itemType: this.props.propertyValues.itemType,
                                   itemProperties: updatedProps,
                                   itemId: this.props.typeProperties.id
                                   })
  }

  render() {
    var type = this.props.type;
    var itemProps = this.props.propertyValues.itemProperties[this.props.typeProperties.id] || {}
    var Comp = Map[type]
    return(
      <div className="full-width">
        <Comp display_name={this.props.typeProperties.display_name}
          propertyValues={itemProps}
          changeHandler={this.changeHandler.bind(this)} />
      </div>
    )
  }
}

PropertyType.propTypes = {
  type: PropTypes.string.isRequired,
  propertyValues: PropTypes.object,
  updateContentProps: PropTypes.func.isRequired,
  typeProperties: PropTypes.object.isRequired
};

export default PropertyType;