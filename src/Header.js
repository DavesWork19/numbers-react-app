import { useNavigate } from 'react-router-dom';

const Header = props => {
    const navigate = useNavigate();
    const currentLevel = props.level;
    let backgroundColor = '';

    if(currentLevel === '1'){
        backgroundColor = 'bg-success-subtle';
    }
    else if(currentLevel === '2'){
        backgroundColor = 'bg-primary-subtle';
    }
    else{
        backgroundColor = 'bg-danger-subtle';
    }
    

    const handleButtonClick = navigation => {
        navigate(navigation);
    }
    
    return(
        <div className={`container text-center pb-3 pt-1 ${backgroundColor}`}>
            <div className='row'>
                <h1 className='col-12 fs-3'>{'The Numbers Game'}</h1>
            </div>
            <span className='row'>
                <span className='col-12'>
                    <div class='dropdown'>
                        <button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        {`Level ${currentLevel}`}
                        </button> 
                        <ul class='dropdown-menu'>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/')}>Home</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-1')}>Level 1</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-2')}>Level 2</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-3')}>Level 3</button></li>                    </ul>
                    </div>
                </span>
            </span>
        </div>
    );
}

export default Header;