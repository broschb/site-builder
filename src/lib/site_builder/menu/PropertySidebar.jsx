import React from "react";
import PropTypes from 'prop-types';
import { ContentProperties } from '../site/content_types/ContentProperties';
import PropertyType from '../site/content_types/property_types/PropertyType';

class PropertySidebar extends React.Component {

  render() {
    var itemType = this.props.activeState.item.itemType;
    var item = this.props.activeState.item;
    var itemProps = ContentProperties[itemType];
    var propKeys = Object.keys(itemProps);
    var properties = propKeys.map((key, index) => {
      var type = key.split("_")[0];
      return (<div key={`${key}_${item.derivedId}`} className="panel-block">
        <PropertyType type={type} typeProperties={itemProps[key]} propertyValues={item} updateContentProps={this.props.updateContentProps}/>
              </div>
             )
    })

    return (
      <nav className="panel">
        <div className="panel-heading">
          <nav className="level">
            <div className='level-left'>
              <div className='level-item'>
                {itemType}
              </div>
            </div>
            <div className='level-right'>
              <div className='level-item'>
                <button className="button is_small is-link is-outlined is-fullwidth" onClick={() => this.props.selectContent({ id: null })}>
                  close
                </button>
              </div>
            </div>
          </nav>  
        </div>
        
        {properties}
      </nav>
    );
  }
}

PropertySidebar.propTypes = {
  activeState: PropTypes.object.isRequired,
  selectContent: PropTypes.func.isRequired,
  updateContentProps: PropTypes.func.isRequired
};

export default PropertySidebar;