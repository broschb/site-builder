import React from 'react';
import IconTile from './IconTile'
import GridDragSource from '../site/GridDragSource';
import { DraggableTypes } from '../Constants';
import cloneDeep from 'lodash/cloneDeep';

const CONTENT_TYPES = [
  {name: 'Button', icon:'square'},
  {name: 'Divider', icon:'minus'},
  {name: 'Text', icon:'font'},
  {name: 'Html', icon:'code'},
  {name: 'Image', icon:'image'}
];

const ROW_LENGTH = 3;

export default class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  splitArray(splitArray, sourceArray){
    var i = 0;
    var newArray = []
    while(i < ROW_LENGTH && sourceArray.length > 0){
      newArray.push(sourceArray.shift());
      i++;
    }
    splitArray.push(newArray)
    if(sourceArray.length > 0){
      splitArray = this.splitArray(splitArray,sourceArray)
    }
    return splitArray;
  }

  renderContentRow(contentArray, rowIndex){
    return contentArray.map(function(d, index){
      var key = rowIndex+"-"+index;
      return (
        <div className="column is-4" key={key}>
          <GridDragSource sourceId={d.name} dragSourceType={DraggableTypes.CONTENT} handle={false}>
            <IconTile name={d.name} icon={d.icon}/>
          </GridDragSource>
        </div>
      );
    })
  }

  render() {
    var split = this.splitArray([], cloneDeep(CONTENT_TYPES));
    var self = this;
    var content = split.map(function(c, index){
      var key = "content-row-"+index
      return (
        <div className="columns" key={key}>
          {self.renderContentRow(c, key)}
        </div>
      );
    });
    return (
      <div>
        {content}
      </div>
    );
  }
}