import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import BaseContentType from './BaseContentType';

class Text extends BaseContentType {

  constructor(props) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    this.props.updateContentProps({
      derivedId: this.props.derivedId,
      itemType: this.props.item.itemProperties.itemType,
      itemProperties: { value: e.target.getContent() },
      itemId: 'text_value'
    })
  }

  render() {
    var value = '<p>Enter Text Here</p>';
    if (this.props.item.itemProperties.text_value != null) {
      value = this.props.item.itemProperties.text_value.value;
    }
    return (
      <div>
        <TinyMCE
          content={value}
          config={{
            inline: true,
            menubar: false,
            plugins: 'autolink link lists textcolor colorpicker',
            toolbar1: 'fontselect fontsizeselect | bold italic underline | numlist bullist',
            toolbar2: 'alignleft aligncenter alignright | forecolor backcolor | link unlink image '
          }}
          onChange={this.handleEditorChange}
        />
      </div>
    )
  }

}

export default Text;