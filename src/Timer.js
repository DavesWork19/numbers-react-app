import { useState, useEffect } from "react";
import { TIMER_TIME } from "./constants";

const Timer = props => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timesRun = 0;
        const timerInterval = setInterval(() => {
            timesRun = timesRun + 1
            if(timesRun > TIMER_TIME - 1){
                clearInterval(timerInterval);
                setTimer(0);
            }
            else {
                setTimer(oldTime => oldTime + 1);
            }
        }, 1000);
    }, []);

    return (
        <div>
            {TIMER_TIME - timer}
        </div>
    );
}

export default Timer;