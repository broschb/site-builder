import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    this.props.updateContentProps({
      derivedId: this.props.derivedId,
      itemType: this.props.item.itemProperties.itemType,
      itemProperties: {value: e.target.getContent()},
      itemId: 'button_value'
    })
  }

  componentDidMount(){
    
  }

  render() {
    var editable = this.props.editable != null && this.props.editable == true;
    var alignmentClass = "";
    var value = '<p>Enter Text Here</p>';
    if (this.props.item.itemProperties.button_value != null){
      value = this.props.item.itemProperties.button_value.value;
    }

    if (this.props.item.itemProperties.button_alignment != null){
      if(this.props.item.itemProperties.button_alignment.align == "right"){
        alignmentClass = "is-pulled-right";
      } else if (this.props.item.itemProperties.button_alignment.align == "left"){
        alignmentClass = "is-pulled-left";
      }
    }
    return (
      <div className={alignmentClass}> 
        <a className="button"> 
          {editable == true && <TinyMCE
            key={this.props.derivedId}
            content={value}
            config={{
              inline: true,
              menubar: false,
              plugins: 'textcolor colorpicker',
              toolbar1: 'fontselect fontsizeselect forecolor | bold italic underline',
            }}
            onChange={this.handleEditorChange}
          />}
          {editable == false && value}
        </a>
      </div>
    )
  }

}

export default Button;