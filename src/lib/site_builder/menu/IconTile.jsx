import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IconTile extends React.Component {

  render(){
    return(
      <div>
        <FontAwesomeIcon icon={this.props.icon} size="2x" />
        <p>
          {this.props.name}
        </p>
      </div>
    )
  }
}
