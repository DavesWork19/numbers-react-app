import { useState } from 'react';
import { GAME_INFO_1, GAME_INFO_2, INFO_ICON } from './constants'


const InfoButton = () => {
    const [infoButtonState, setInfoButtonState] = useState(true);

    const handleInfoButton = () => {
        setInfoButtonState(false);
        setTimeout(() => {
            setInfoButtonState(true);
        }, 5000)
    }

    return (
        <div className='pt-5 mt-5 text-center'>
            {infoButtonState ? 
            <button onClick={handleInfoButton}>
                {INFO_ICON}
            </button>
            :
            <div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        {GAME_INFO_1}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        {GAME_INFO_2}
                    </div>
                </div>
                <a href="https://icons8.com/icon/80585/info">Info</a> icon by <a href="https://icons8.com">Icons8</a>
            </div>
            }
        </div>
    );
}

export default InfoButton;
