import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Body from './Body';
import Content from './Content';
import Layout from './Layout';

export default class Menu extends React.Component {

  constructor(props){
    super(props);
    this.state = { tab:'body' };
  }

  handleChange = (tab) => {
    this.setState({ tab });
  };

  render() {
    return (
      <div>
        <div className="tabs is-small">
          <ul>
            <li className={this.state.tab === 'body' ? 'is-active' : ''} onClick={(e) => this.handleChange('body', e)}>
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="columns" size="1x" />
                </span>
                <span>Body</span>
              </a>
            </li>
            <li className={this.state.tab === 'layout' ? 'is-active' : ''} onClick={(e) => this.handleChange('layout', e)}>
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="bars" />
                </span>
                <span>Layout</span>
              </a>
            </li>
            <li className={this.state.tab === 'content' ? 'is-active' : ''} onClick={(e) => this.handleChange('content', e)}>
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon="th-large" />
                </span>
                <span>Content</span>
              </a>
            </li>
          </ul>
        </div>
        {this.state.tab === 'content' && <Content/>}
        {this.state.tab === 'layout' && <Layout />}
        {this.state.tab === 'body' && <Body />}
      </div>
    )
  }
}