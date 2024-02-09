import { FixedSizeList as List, FixedSizeGrid as Grid } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Row
    {index}
  </div>
);

/* Row */
const RowExample = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);

/* Column */
const Column = ({ index, style }) => (
  <div style={style}>
    Column
    {index}
  </div>
);

const ColumnExample = () => (
  <List
    height={75}
    itemCount={1000}
    itemSize={100}
    layout="horizontal"
    width={300}
  >
    {Column}
  </List>
);

/* Matrix */
const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item
    {' '}
    {rowIndex}
    ,
    {columnIndex}
  </div>
);

const GridExample = () => (
  <Grid
    columnCount={1000}
    columnWidth={100}
    height={150}
    rowCount={1000}
    rowHeight={35}
    width={300}
  >
    {Cell}
  </Grid>
);

const ReactWindowEg = () => (
  <>
    <div className="text-purple-400" style={{ marginTop: 20 }}>
      Column List
    </div>
    <ColumnExample />
    <div className="text-purple-400" style={{ marginTop: 20 }}>
      Row List
    </div>
    <RowExample />
    <div className="text-purple-400" style={{ marginTop: 30 }}>
      Matrix List
    </div>
    <GridExample />
  </>
);

export default ReactWindowEg;
