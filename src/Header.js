import { useNavigate } from 'react-router-dom';
import { LEVEL_1, LEVEL_2 } from './constants';
import HomeIcon from './HomeIcon';

const Header = props => {
    const navigate = useNavigate();
    const currentLevel = props.level;
    let homeButtonColor = '';

    if(currentLevel === LEVEL_1){
        homeButtonColor = 'bg-success-subtle';
    }
    else if(currentLevel === LEVEL_2){
        homeButtonColor = 'bg-primary-subtle';
    }
    else{
        homeButtonColor = 'bg-danger-subtle';
    }

    const handleHomeClick = navigation => {
        navigate(navigation);
    }
    
    return(
        <div className={`container text-center pb-4 pt-3 border-bottom border-dark ${homeButtonColor}`}>
            <div className='row'>
                <h1 className='col-8 fs-3'>{'The Numbers Game'}</h1>
                <div className={`col-4 ${homeButtonColor}`} onClick={() => handleHomeClick('/')}>
                    <HomeIcon />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 fs-2'>
                    {`Level ${currentLevel}`}
                </div>       
            </div>
        </div>
    );
}

export default Header;