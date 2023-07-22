import { useNavigate } from 'react-router-dom';

const Header = props => {
    const navigate = useNavigate();
    const handleButtonClick = navigation => {
        navigate(navigation);
    }
    
    return(
        <header className='container text-center mb-5 mt-1'>
            <div className='row'>
                <h1 className='col-12 fs-3'>{'The Numbers Game'}</h1>
            </div>
            <span className='row'>
                <span className='col-12'>
                    <div class='dropdown'>
                        <button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        {`Level ${props.level}`}
                        </button> 
                        <ul class='dropdown-menu'>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/')}>Home</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-1')}>Level 1</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-2')}>Level 2</button></li>
                            <li><button className='dropdown-item' onClick={() => handleButtonClick('/level-3')}>Level 3</button></li>                    </ul>
                    </div>
                </span>
            </span>
        </header>
    );
}

export default Header;