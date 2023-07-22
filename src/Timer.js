import { useState, useEffect } from 'react';
import { TIMER_TIME } from './constants';

const Timer = props => {
    const [timer, setTimer] = useState(0);
    const endGame = props.data

    useEffect(() => {
        let timesRun = 0;
        const timerInterval = setInterval(() => {
            timesRun = timesRun + 1
            if(timesRun > TIMER_TIME){
                clearInterval(timerInterval);
                setTimer(0);
            }
            else {
                setTimer(oldTime => oldTime + 1);
            }
        }, 1000);
    }, []);

    if(timer > TIMER_TIME - 1){
        endGame();
    }

    return (
        <div>
            <div class='progress' style={{'height': '50px'}} role='progressbar' aria-label='Info striped example' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'>
                <div class='progress-bar progress-bar-striped bg-info fs-3' style={{'width': `${(TIMER_TIME - timer)*1.667}%`}}>{TIMER_TIME - timer}</div>
            </div>
        </div>
    );
}

export default Timer;