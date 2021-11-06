import React, {useState} from 'react';
import './Chart.scss';
import ChartBar  from './ChartBar';

const Chart = (props) => {
  // const [dataPoints, setDataPoints] = useState([]);
  // setDataPoints(props.dataPoints);
  // <ChartBar
  //   key={1}
  //   value={1}
  //   maxValue={1}
  //   label={1}
  // />
    return (
      <>
         <ChartBar
            key={1}
            value={1}
            maxValue={1}
            label={1}
          />
      </>
    );
}

export default Chart;


{/* {
          props.dataPoints.map(expense => (
              <p>lalal</p>
          ))
        }   */}