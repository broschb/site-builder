import React from 'react';
import PropTypes from 'prop-types';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

class Color extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.updateColor = this.updateColor.bind(this);
    this.state = {
      color: propertyValues.color || '#fff',
      alpha: propertyValues.alpha || 100
    };
  }

  updateColor(color) {
    this.setState({
      color: color.color,
      alpha: color.alpha
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
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
              <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
                <ColorPicker
                  animation="slide-up"
                  color={this.state.color}
                  alpha={this.state.alpha}
                  onChange={this.updateColor}
                />
              </div>
            </div>
          </div>
        </nav>  
      </div>
    )
  }
}

Color.propTypes = {
  propertyValues: PropTypes.object
};

export default Color;