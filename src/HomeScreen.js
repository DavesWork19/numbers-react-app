import { useNavigate } from 'react-router-dom';


const HomeScreen = () => {
    const navigate = useNavigate();
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
                    <button type='button' onClick={() => handleButtonClick('/level-1')} className='btn btn-light border col m-2'>
                        <h2>Level 1</h2>
                        <p>Only Addition and Subtraction</p>
                    </button>
                </div>
                <div className='row'>
                    <button type='button' onClick={() => handleButtonClick('/level-2')} className='btn btn-light border col m-2'>
                        <h2>Level 2</h2>
                        <p>Only Addition, Subtraction, and Multiplication</p>
                    </button>
                </div>
                <div className='row'>
                    <button type='button' onClick={() => handleButtonClick('/level-3')} className='btn btn-light border col m-2'>
                        <h2>Level 3</h2>
                        <p>Addition, Subtraction, Multiplication, and Division</p>
                    </button>
                </div>
            </main>
        </>
    );
}

export default HomeScreen;
