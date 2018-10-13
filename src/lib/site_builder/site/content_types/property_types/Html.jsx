import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-coy.css';
require('prismjs/components/prism-jsx');

class Html extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.state = {
      html: propertyValues.html || '',
    };
  }

  updateHtmlValue(code) {
    this.setState({
      html: code
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
    return (
      <div>
        <Editor
          value={this.state.html}
          onValueChange={code => this.updateHtmlValue(code)}
          highlight={code => highlight(code, languages.markup)}
          padding={10}
        />
        
      </div>
    )
  }
}

Html.propTypes = {
  propertyValues: PropTypes.object
};

export default Html;