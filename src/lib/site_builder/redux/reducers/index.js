import {ADD_ROW, ADD_CONTENT, SELECT_CONTENT, UPDATE_CONTENT_PROPS, LOAD_SITE_PAGE} from "../../Constants";
import cloneDeep from 'lodash/cloneDeep';


const initialState = {
  rows:[],
  currentPage: 1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
       return addRow(state, action);
    case ADD_CONTENT:
       return addContent(state, action);
    case SELECT_CONTENT:
       return selectContent(state, action);
    case UPDATE_CONTENT_PROPS:
        return updateContentProps(state, action);
    case LOAD_SITE_PAGE:
        return loadSitePage(state, action);
    default:
      return state;
  }
};

const loadSitePage = (state, action) => {
  return { ...state,
    currentPage: action.payload.id,
    rows: action.payload.data
  }
}

const updateContentProps = (state, action) => {
  var rows = cloneDeep(state.rows);
  var itemProps = action.payload.itemProperties;
  var item = null;
  if (action.payload.derivedId != null) {
    var parts = action.payload.derivedId.split(".");
    if(parts.length == 3){
      item = rows[parts[0]].columns[parts[1]].items[parts[2]];
      item.itemProperties[action.payload.itemId] = itemProps;
      rows[parts[0]].columns[parts[1]].items[parts[2]] = item;
    }else if(parts.length == 1){
      item = rows[parts[0]].item;
      item.itemProperties[action.payload.itemId] = itemProps;
      rows[parts[0]].item = item;
    }
  }
  
  return { ...state,
    rows: rows,
    activeState: {
      id: action.payload.derivedId,
      item: item
    }
  };
}

const selectContent = (state, action) => {
  var item = null; 
  var rows = state.rows;
  if(action.payload.id != null){
    var parts = action.payload.id.split(".");
    if(parts.length == 3){ //item in row/column
      item = rows[parts[0]].columns[parts[1]].items[parts[2]]
    }else if(parts.length ==1){//row
      item = rows[parts[0]].item
    }
  }
  return Object.assign({}, state, {
    activeState: {id: action.payload.id, item: item}
  })
}

const addContent = (state, action) => {
  var sourceId = action.payload.item.sourceId
  var targetId = action.payload.targetId;
  var targetParts = targetId.split(".");
  var targetRowId = targetParts[0];
  var targetColumnId = targetParts[1];
  var rows = cloneDeep(state.rows);
  var targetRow = rows[targetRowId];
  var targetColumn = targetRow.columns[targetColumnId];
  if (sourceId.indexOf(".") > -1) {
    var sourceParts = sourceId.split(".");
    var sourceRow = rows[sourceParts[0]];
    var sourceColumn = sourceRow.columns[sourceParts[1]];
    var sourceItem = sourceColumn.items[sourceParts[2]];
    sourceColumn.items.splice(sourceParts[2],1);
    var targetIdx = targetParts.length > 2 ? targetParts[2] : 0
    targetColumn.items.splice(targetIdx, 0, sourceItem);
    resetDerivedIds(sourceColumn.items, `${sourceParts[0]}.${sourceParts[1]}`);
    resetDerivedIds(targetColumn.items, `${targetParts[0]}.${targetParts[1]}`);
  }else{
    var derivedId = `${targetRowId}.${targetColumnId}.${targetColumn.items.length}`;
    targetColumn.items.push(buildNewColumnItem(derivedId, action.payload.item.layout));
  }
  return { ...state,
    rows: rows
  };
}

const resetDerivedIds = (items, sourcePrefix) => {
  for(var i=0; i<items.length;i++){
    items[i].derivedId = `${sourcePrefix}.${i}`;
  }
}

const addRow = (state, action) => {
  var targetId = parseInt(action.payload.targetId);
  var rows = cloneDeep(state.rows);
  var newRow = null;
  var index = targetId > 0 ? targetId : 0;

  //if sourceId exists move item
  if (action.payload.item.sourceId != null){
    var sourceId = parseInt(action.payload.item.sourceId);
    newRow = rows[sourceId];
    rows.splice(sourceId, 1);
  }else{
    newRow = buildNewRow(action.payload.item.layout.id, index);
  }

  rows.splice(index, 0, newRow)
  return { ...state,
    rows: rows
  };
}

const buildNewRow = (layoutId, index) => {
  var columns = layoutId.split("_").length;
  var columnArray = [];
  for(var i=0; i<columns; i++){
    columnArray.push(buildNewColumn());
  }
  return {
    layoutId: layoutId,
    columns: columnArray,
    item: buildNewColumnItem(index,'Row')
  }
}

const buildNewColumn = () => {
  return {
    derivedId: null,
    items: []
  }
}

const buildNewColumnItem = (derivedId, itemType) => {
  return {
    derivedId: derivedId,
    itemType: itemType,
    itemProperties: {}
  }
}

export default rootReducer;