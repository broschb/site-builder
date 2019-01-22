import React from 'react';
import Grid from './Grid';
import {SharedSiteProvider} from './SharedSiteContext'

class Site extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SharedSiteProvider>
          <Grid {...this.props}/>
        </SharedSiteProvider>
      </div>
    )
  }
}

export default Site;