import React from 'react';
import PropTypes from 'prop-types';
import BaseContentType from './BaseContentType';

class Html extends BaseContentType {

  render() {
    var html = "<b>Click to edit HTML</b>";
    if (this.props.item.itemProperties.html_text != null && this.props.item.itemProperties.html_text.html.length > 0) {
      html = this.props.item.itemProperties.html_text.html;
    }
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    )
  }

}

export default Html;