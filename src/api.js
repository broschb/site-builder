const tempRows1 = `[{"item":{
    "derivedId": "0",
    "itemType": "Row",
    "itemProperties": {}
  },"layoutId":"6_6","columns":[{"derivedId":null,"items":[{"derivedId":"0.0.0","itemType":"Button","itemProperties":{}}]},{"derivedId":null,"items":[]}]},
  {
    "item":{
      "derivedId": "1",
      "itemType": "Row",
      "itemProperties": {}
    },
    "layoutId": "12", "columns": [{
      "derivedId": null,
      "items": [{
        "derivedId": "1.0.0",
        "itemType": "Button",
        "itemProperties": {}
      }]
    }]
  }]
  `

  const tempRows2 = `[{"item":{
    "derivedId": "0",
    "itemType": "Row",
    "itemProperties": {}
  },"layoutId":"6_6","columns":[{"derivedId":null,"items":[{"derivedId":"0.0.0","itemType":"Button","itemProperties":{}}]},{"derivedId":null,"items":[]}]},
  {
    "item":{
      "derivedId": "1",
      "itemType": "Row",
      "itemProperties": {}
    },
    "layoutId": "12", "columns": [{
      "derivedId": null,
      "items": []
    }]
  }]
  `

  const tempRows3 = `[]`

  const pages = [tempRows1, tempRows2, tempRows3]

export function savePage(siteId, pageId, rows, callback) {
  callback("");
}

export function newPage(siteId, callback) {
  callback({data: [], id: 3, name: "new page"})
}

export function loadSitePage(siteId, pageId, callback){
  var pageData = JSON.parse(pages[pageId - 1])
  var page = {data: pageData, id: pageId, name: "name"}
  callback(page)
}