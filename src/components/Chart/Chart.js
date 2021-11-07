import React, {useState} from 'react';
import './Chart.scss';
import ChartBar  from './ChartBar';

const Chart = (props) => {
  console.log("============",props.dataPoints);
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
  console.log("dataPointValue: " ,dataPointValue);
  const totalMaximum = Math.max(...dataPointValue);
  console.log("totalMaximum:", totalMaximum);

    return (

      <div className="chart">
        <div className ="chart__list">
          {
            props.dataPoints.map(dataPoint => (
              <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={null}
                label={dataPoint.label}
              />
            ))
          }
        </div>
      </div>
    );
}

export default Chart;


