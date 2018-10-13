import React, { Component } from 'react';

const SharedSiteContext = React.createContext();

export class SharedSiteProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredIds: []
    };
  }

  addId = id => {
    var filteredItems = this.state.hoveredIds.filter(function (i) {
      return i !== id;
    });
    filteredItems.push(id);
    this.setState({
      hoveredIds: filteredItems
    });
  };

  removeId = (id, clear) => {
    var filteredItems = this.state.hoveredIds.filter(function (i) {
      return i !== id;
    });
    if(clear == true){
      filteredItems = []
    }
    this.setState({
      hoveredIds: filteredItems
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SharedSiteContext.Provider
        value={{
          addId: this.addId,
          removeId: this.removeId,
          hoveredIds: this.state.hoveredIds,
        }}
      >

        {children}
      </SharedSiteContext.Provider>
    );
  }
  
}

export const SharedSiteConsumer = SharedSiteContext.Consumer;