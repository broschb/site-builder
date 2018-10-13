import {ADD_ROW, ADD_CONTENT, SELECT_CONTENT, UPDATE_CONTENT_PROPS} from "../../Constants";

export const addRow = row => ({
  type: ADD_ROW,
  payload: row
});

export const addContent = content => ({
  type: ADD_CONTENT,
  payload: content
});

export const selectContent = content => ({
  type: SELECT_CONTENT,
  payload: content
});

export const updateContentProps = content => ({
  type: UPDATE_CONTENT_PROPS,
  payload: content
})