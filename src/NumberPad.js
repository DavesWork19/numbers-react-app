import { useState } from 'react';

const NumberPad = props => {
    const [guess, setGuess] = useState('');
    const updateCount = props.data[0];
    const finalResult = props.data[1];
    
    
    const handleGuess = userGuess => {
        if(userGuess === 'B'){
            const newGuess = guess.substring(0, guess.length-1);
            setGuess(newGuess);
        }
        else {
            
            const newGuess = guess.concat(userGuess);
            setGuess(newGuess);
            const newGuessInt = parseInt(newGuess);

            if(newGuessInt === finalResult) {
                setTimeout(() => {
                    updateCount();
                    setGuess('');
                }, 500)
            }
        }
    }


    return (
        <div className='container border border-dark'>
            <div className='row'>
                <div className='col-12 p-1'>
                    {!!guess ? guess : '_'}
                </div>
            </div>
            <div className='row border-top border-dark'>
                <div className='col-12'>
                    <div className='row'>
                        <button onClick={() => handleGuess('1')} className='col-4 p-2'>{1}</button>
                        <button onClick={() => handleGuess('2')} className='col-4 p-2'>{2}</button>
                        <button onClick={() => handleGuess('3')} className='col-4 p-2'>{3}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('4')} className='col-4 p-2'>{4}</button>
                        <button onClick={() => handleGuess('5')} className='col-4 p-2'>{5}</button>
                        <button onClick={() => handleGuess('6')} className='col-4 p-2'>{6}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('7')} className='col-4 p-2'>{7}</button>
                        <button onClick={() => handleGuess('8')} className='col-4 p-2'>{8}</button>
                        <button onClick={() => handleGuess('9')} className='col-4 p-2'>{9}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('0')} className='col-12 p-2'>{0}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('B')} className='col-12 p-2'>{'BACK'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumberPad;