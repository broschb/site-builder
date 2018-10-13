import React from 'react';
import PropTypes from 'prop-types';
import BaseContentType from './BaseContentType';
import './Divider.css'

const DEFAULT_COLOR = "#776f6f";
class Divider extends BaseContentType {

  renderContent(dataContent){
    //TODO for pseudo class styling https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react
    var backColor = DEFAULT_COLOR;
    if(this.props.item.itemProperties.divider_color !=null){
      backColor = this.props.item.itemProperties.divider_color.color;
    }
    let styles = {
      borderTop: `.1rem solid ${backColor}`
    };
    if(dataContent!=null){
      return (<div className="is-divider" data-content={dataContent} style={styles}></div>)
    }else{
      return (<div className="is-divider-custom" style={styles}></div>)
    }
  }

  render() {
    var dataContent = null;
    if (this.props.item.itemProperties.divider_text != null && this.props.item.itemProperties.divider_text.text.length > 0) {
      dataContent = this.props.item.itemProperties.divider_text.text;
    }
    return (
      <div>
        {this.renderContent(dataContent)}
      </div>
    )
  }

}

export default Divider;