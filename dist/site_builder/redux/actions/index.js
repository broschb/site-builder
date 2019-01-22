import { ADD_ROW, ADD_CONTENT, SELECT_CONTENT, UPDATE_CONTENT_PROPS, LOAD_SITE_PAGE } from "../../Constants";

export var addRow = function addRow(row) {
  return {
    type: ADD_ROW,
    payload: row
  };
};

export var addContent = function addContent(content) {
  return {
    type: ADD_CONTENT,
    payload: content
  };
};

export var selectContent = function selectContent(content) {
  return {
    type: SELECT_CONTENT,
    payload: content
  };
};

export var updateContentProps = function updateContentProps(content) {
  return {
    type: UPDATE_CONTENT_PROPS,
    payload: content
  };
};

export var loadSitePage = function loadSitePage(content) {
  return {
    type: LOAD_SITE_PAGE,
    payload: content
  };
};