import React from 'react';
import LayoutItem from './LayoutItem';

const GRID_TYPES = [
  { id: '12' },
  { id: '6_6' },
  { id: '4_8' },
  { id: '8_4' },
  { id: '4_4_4' },
  { id: '3_3_3_3' }
];

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  renderGridRow(grid) {
    return(
        <LayoutItem key={grid.id} grid={grid}/>
    )
  }

  render() {
    const grids = [];
    for (let i = 0; i < GRID_TYPES.length; i++) {
      var key = "gridType" + i
      grids.push(this.renderGridRow(GRID_TYPES[i]))
    }

    return (
      <div>
        {grids}
      </div>
    );
  }
}