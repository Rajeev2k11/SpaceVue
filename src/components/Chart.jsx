import {Bar, Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { useEffect, useState } from 'react';


function Chart() {
    const [chartData, setChartData] = useState([]);


    useEffect(()=>{
        const dataFetch = async () => {
          const data = await (
            await fetch(
              'https://www.ag-grid.com/example-assets/space-mission-data.json',
            )
          ).json();
    
          // set state when the data received
          setChartData(data);
        };
    
        dataFetch();
      },[])

      const getChartData = () => {
        const successfulMissions = chartData.filter((mission) => mission.successful === true).length;
        const unsuccessfulMissions = chartData.filter((mission) => mission.successful === false).length;
    
        return {
          labels: ['Successful Missions', 'Unsuccessful Missions'],
          datasets: [
            {
              label: 'Number of Missions',
              backgroundColor: ['#4CAF50', '#FF5252'],
              borderColor: ['#4CAF50', '#FF5252'],
              borderWidth: 1,
              hoverBackgroundColor: ['#45A049', '#FF1A1A'],
              data: [successfulMissions, unsuccessfulMissions],
            },
          ],
        };
      };
  return (
<div>
      
      {chartData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{display:'flex', justifyContent:'space-between',padding:"20px"}}>
        <div style={{width:"50%"}}>
        <h2>Mission Outcomes Bar Chart</h2>
        <Bar
          data={getChartData()}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Missions',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Mission Outcome',
                },
              },
            },
          }}
        />
        </div>
       
       <div style={{width:"25%", padding:"20px"}}>
       <h2>Mission Outcomes Pie Chart</h2>
        <Pie data={getChartData()}/>
       </div>
       </div>
      )}
      
    </div>  
      
   
  )
}

export default Chart