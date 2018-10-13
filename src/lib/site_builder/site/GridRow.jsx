import React from 'react';
import GridRowColumn from './GridRowColumn';
import PropTypes from 'prop-types';
import './GridRow.css'

class GridRow extends React.Component {

  constructor(props) {
    super(props);
  }

  renderColumns(){
    var row = this.props.row;
    var parts = row.layoutId.split("_");
    return (
      parts.map((item, index) => {
        var intSize = parseInt(item)
        var key = this.props.rowId + "-" + row.layoutId + "-" + index
        var className = `column is-${item} site-column`
        return (
          <div key={key} className={className}>
            <GridRowColumn key={`grc-${this.props.rowId}.${index}`} rowId={this.props.rowId} columnId={index} columnProps={row.columns[index]} {...this.props}/>
          </div>
        )
      })
    )
  }

  render() {
    //TODO https://css-tricks.com/almanac/properties/b/background-position/
    var imgUrl = ''
    if(this.props.row.item.itemProperties.image != null){
      imgUrl = this.props.row.item.itemProperties.image.url;
    }
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',//contain vs cover
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    }
    return (
      <div style={divStyle} className='columns is-mobile'>
        {this.props.row && this.renderColumns()}
      </div>
    )
  }
}

GridRow.propTypes = {
  rowId: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired
};

export default GridRow