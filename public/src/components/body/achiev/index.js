import Separator from 'components/common/separator';
import React from 'react';
import './achiev.css';

function Achievements() {
    return (
        <div className="achievements">
            <Separator/>
            <label className="section-title">Achievements</label>
            <div className="achievement-content">
                <a href="https://drive.google.com/file/d/1cydfPdUtkqRPCoin5hWpwbuE2lT4ZDBY/view?usp=sharing">
                    1. 44th rank in AWS Deepracer women's league orgnized bt Amazon.
                </a>
                2. Selected in cummins scholarship program(2019-2023).
            </div>
           
        </div>
    )
}

export default Achievements
