import React from 'react';
import './ChartBar.scss';

function ChartBar(props) {
    return (
        <div className="chart__list__chartbar">
            <div className="chartbar__progress">
                <div className="chartbar__progress__done">
                    <span>70%</span>
                </div>
            </div>
            <div className="chartbar__progress__title">{props.label}</div>
        </div>
    );
}

export default ChartBar;