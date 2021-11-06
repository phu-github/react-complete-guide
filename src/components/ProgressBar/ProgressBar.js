import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
    return (
        <div className="progress">
            <div className="progress__done">
                <span>70%</span>
            </div>
        </div>
    );
}

export default ProgressBar;