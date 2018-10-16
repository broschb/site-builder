var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var SharedSiteContext = React.createContext();

export var SharedSiteProvider = function (_Component) {
  _inherits(SharedSiteProvider, _Component);

  function SharedSiteProvider(props) {
    _classCallCheck(this, SharedSiteProvider);

    var _this = _possibleConstructorReturn(this, (SharedSiteProvider.__proto__ || Object.getPrototypeOf(SharedSiteProvider)).call(this, props));

    _this.addId = function (id) {
      var filteredItems = _this.state.hoveredIds.filter(function (i) {
        return i !== id;
      });
      filteredItems.push(id);
      _this.setState({
        hoveredIds: filteredItems
      });
    };

    _this.removeId = function (id, clear) {
      var filteredItems = _this.state.hoveredIds.filter(function (i) {
        return i !== id;
      });
      if (clear == true) {
        filteredItems = [];
      }
      _this.setState({
        hoveredIds: filteredItems
      });
    };

    _this.state = {
      hoveredIds: []
    };
    return _this;
  }

  _createClass(SharedSiteProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return React.createElement(
        SharedSiteContext.Provider,
        {
          value: {
            addId: this.addId,
            removeId: this.removeId,
            hoveredIds: this.state.hoveredIds
          }
        },
        children
      );
    }
  }]);

  return SharedSiteProvider;
}(Component);

export var SharedSiteConsumer = SharedSiteContext.Consumer;