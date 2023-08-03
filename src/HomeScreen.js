import { useNavigate, useLocation } from 'react-router-dom';
import { GAME_INFO_1, GAME_INFO_2 } from './constants'


const HomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const previousTime = location.state?.time;

    const handleButtonClick = navigation => {
        navigate(navigation);
    }

    return (
        <>
            <header className='container mb-4 mt-2'>
                <h1 className='text-center'>The Numbers Game</h1>
            </header>
            <main className='container'>
                <div className='row'>
                    <button type='button' onClick={() => handleButtonClick('/daGame')} className='btn btn-light border col m-2'>
                        <h2>Start!</h2>
                    </button>
                </div>
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
                <div>{previousTime ? previousTime : null}</div>
            </main>
        </>
    );
}

export default HomeScreen;
