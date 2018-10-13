import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.state = {
      text: propertyValues.text || '',
    };
  }

  updateTextValue(evt) {
    this.setState({
      text: evt.target.value
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
    return (
      <div>
        <input className="input" type="text" placeholder={this.props.display_name} value={this.state.text} onChange={evt => this.updateTextValue(evt)}/>
      </div>
    )
  }
}

Text.propTypes = {
  propertyValues: PropTypes.object
};

export default Text;