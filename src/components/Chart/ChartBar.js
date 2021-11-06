import React from 'react';
import './ChartBar.scss';

function ChartBar(props) {
    return (
        <div className="chart-progress">
            <div className="chart-progress__done">
                <span>70%</span>
            </div>
        </div>
    );
}

export default ChartBar;