import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme
import Chart from './Chart';

// Create new GridExample component
const Dashboard = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ]);

  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
    .then(result=>result.json())
    .then(rowData=>setRowData(rowData))
  },[])

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={styles.container}>
<div
      className={
        "ag-theme-alpine-dark"
      }
      style={{ width: '100%', height:500 }}
    >
      <AgGridReact  rowData={rowData} columnDefs={colDefs} />
    </div>
    <div style={styles.chartBox}>
      <h2 style={{textAlign:'center'}}>Charts</h2>
      <Chart />
    </div>
    </div>
    
  );
};
const styles = {
  container: {
    margin:"20px",
    
  },
  chartBox:{
    paddingBottom:"40px",
  }
};
// Render GridExample
export default Dashboard;