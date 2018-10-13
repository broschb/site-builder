import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';


class Image extends React.Component {

  constructor(props) {
    super(props);
    var propertyValues = this.props.propertyValues || {};
    this.updatePicture = this.updatePicture.bind(this);
    this.state = {
      url: propertyValues.url || '',
    };
  }

  updatePicture(pictureFiles, pictureDataURLs) {
  console.log(pictureFiles)
  console.log(pictureDataURLs)
    // this.setState({
    //   color: color.color,
    //   alpha: color.alpha
    // }, this.updateProps);
  }

  updateUrlValue(evt){
    this.setState({
      url: evt.target.value
    }, this.updateProps);
  }

  updateProps(){
    this.props.changeHandler(this.state);
  }

  render() {
    return (
      <div>
        <input className="input" type="text" placeholder='Image Url' value={this.state.url} onChange={evt => this.updateUrlValue(evt)} />
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.updatePicture}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
      </div>
    )
  }
}

Image.propTypes = {
  propertyValues: PropTypes.object
};

export default Image;