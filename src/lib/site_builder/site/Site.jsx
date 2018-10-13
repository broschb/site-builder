import React from 'react';
import Grid from './Grid';
import {SharedSiteProvider} from './SharedSiteContext'

class Site extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editable: true};
  }

  render() {
    return (
      <div>
        <SharedSiteProvider>
          <Grid/>
        </SharedSiteProvider>
      </div>
    )
  }
}

export default Site;