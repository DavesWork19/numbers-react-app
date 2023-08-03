import TheGame from './TheGame';
import Header from './Header';
import Timer from './Timer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LEVEL_1_TIMER, LEVEL_3, STOP_GAME } from './constants'

const GameContainer = () => {
    const navigate = useNavigate();
    const [countingDown, setCountingDown] = useState(true)
    const [countDownTimer, setCountDownTimer] = useState(LEVEL_1_TIMER);
    const [updateTimer, setUpdateTimer] = useState('');
    const [currentLevel, setCurrentLevel] = useState(1);

    //document.body.style.backgroundColor = '#90EE90';

    useEffect(() => {
        let timesRun = LEVEL_1_TIMER;
        const timerInterval = setInterval(() => {
            timesRun = timesRun - 1
            if(timesRun === 0){
                clearInterval(timerInterval);
                setCountingDown(false);
            }
            else {
                setCountDownTimer(oldTime => oldTime - 1);
            }
        }, 1000);
    }, []);

    const handleTimerUpdate = time => {
        setTimeout(() => {
            navigate('/',{state:{time:time}});
        }, 10)
    }

    const handleChangeLevel = () => {
        if(currentLevel === LEVEL_3){
            setUpdateTimer(STOP_GAME);
        }
        else{
            setCurrentLevel(oldLevel => oldLevel + 1);
        }
    }

    return (
        countingDown ? <div className='pb-5'>
                            <Header level={1} />
                            <main className='container text-center'>
                                {countDownTimer}
                            </main>
                        </div>
        :
        <div className='pb-5'>
            <Header level={currentLevel} />
            <main className='container text-center'>
                <Timer updateTimer={updateTimer} handleTimerUpdate={handleTimerUpdate}/>
                <TheGame level={currentLevel} changeLevel={handleChangeLevel}/>
            </main>
        </div>
    );
}

export default GameContainer;
