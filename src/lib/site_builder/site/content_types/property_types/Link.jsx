import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.state = {
      url: propertyValues.url || '',
      newWindow: propertyValues.newWindow || false
    };
  }

  updateUrlValue(evt) {
    this.setState({
      url: evt.target.value
    }, this.updateProps);
  }

  updateNewWindowValue(evt) {
    this.setState({
      newWindow: evt.target.value
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
    return (
      <div>
        <input className="input" type="text" placeholder={this.props.display_name} value={this.state.url} onChange={evt => this.updateUrlValue(evt)}/>
          <label className="checkbox">
          <input type="checkbox" value={this.state.newWindow} onChange={evt => this.updateNewWindowValue(evt)}/>
              Open in new window
            </label>
      </div>
    )
  }
}

Link.propTypes = {
  propertyValues: PropTypes.object
};

export default Link;