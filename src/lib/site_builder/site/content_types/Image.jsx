import React from 'react';
import PropTypes from 'prop-types';
import BaseContentType from './BaseContentType';

class Image extends BaseContentType {

  render() {
    var imageUrl = null;
    try{
      imageUrl = this.props.item.itemProperties.image.url;
    }catch(e){}
    return (
      <div>
        <img
          src={imageUrl}
          alt="Image Not Found"
        />
      </div>
    )
  }

}

export default Image;