import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Alignment extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.state = {
      align: propertyValues.align || 'center'
    };
  }

  updateAlign(evt, type) {
    this.setState({
      align: type
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
    var leftClass = this.state.align == 'left' ? 'button is-selected is-info' : 'button';
    var centerClass = this.state.align == 'center' ? 'button is-selected is-info' : 'button';
    var rightClass = this.state.align == 'right' ? 'button is-selected is-info' : 'button';
    return (
      <div>
        <nav className="level">
          <div className='level-left'>
            <div className='level-item'>
              {this.props.display_name}
            </div>
          </div>
          <div className='level-right field has-addons'>
            <div className='level-item'>
                <p className="control">
                <a className={leftClass} onClick={evt => this.updateAlign(evt,'left')}>
                    <FontAwesomeIcon icon={'align-left'} size="1x" />
                  </a>
                </p>
            </div>
            <div className='level-item'>
              <p className="control">
                <a className={centerClass} onClick={evt => this.updateAlign(evt, 'center')}>
                  <FontAwesomeIcon icon={'align-center'} size="1x" />
                </a>
              </p>
            </div>
            <div className='level-item'>
              <p className="control">
                <a className={rightClass} onClick={evt => this.updateAlign(evt, 'right')}>
                  <FontAwesomeIcon icon={'align-right'} size="1x" />
                </a>
              </p>
            </div>                
          </div>
        </nav>  
      </div>
    )
  }
}

Alignment.propTypes = {
  propertyValues: PropTypes.object
};

export default Alignment;