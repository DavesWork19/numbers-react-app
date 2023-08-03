import { useNavigate, useLocation } from 'react-router-dom';
import InfoButton from './InfoButton'
import { GREETINGS } from './constants'


const HomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const previousTime = location.state?.time;
    const randomGreeting = GREETINGS[Math.floor(Math.random()*GREETINGS.length)];

    const handleButtonClick = navigation => {
        navigate(navigation);
    }

    return (
        <>
            <div className={'container text-center pb-3 pt-3 border-bottom border-dark'}>
                <div className='row'>
                    <h1 className='col-8 fs-3'>{'The Numbers Game'}</h1>
                </div>
                <div className='row'>
                    <div className='col-12 fs-2'>
                        {randomGreeting}
                    </div>       
                </div>
            </div>
            <main className='container pt-5 mt-5'>
                <div className='row'>
                    <button type='button' onClick={() => handleButtonClick('/daGame')} className='btn btn-light border col m-2'>
                        <h2>Start!</h2>
                    </button>
                </div>
                <InfoButton />
                <div className='row'>
                    <div className='col-12 fs-1 text-center pt-5'>
                        {previousTime ? <div>Previous Time: {previousTime}<span className='fs-3'>seconds</span></div> : null}
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomeScreen;
