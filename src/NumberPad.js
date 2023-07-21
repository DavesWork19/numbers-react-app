import { useState } from 'react';

const NumberPad = props => {
    const [guess, setGuess] = useState('');
    const finalResult = props.data[1];
    const updateCount = props.data[0];
    
    const handleGuess = userGuess => {
        if(userGuess === 'B'){
            const newGuess = guess.substring(0, guess.length-1);
            setGuess(newGuess);
        }
        else {
            
            const newGuess = guess.concat(userGuess);
            setGuess(newGuess);
            const newGuessInt = parseInt(newGuess);
            console.log(finalResult, newGuessInt)
            if(newGuessInt === finalResult) {
                //continue with next math question
                console.log('WORKRKRNRINRI');
                setGuess('');
                updateCount();
            }
        }
    }


    return (
        <>
            <div>
                    {'current guess: '}{guess}
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <button onClick={() => handleGuess('1')} className='col-4'>{1}</button>
                        <button onClick={() => handleGuess('2')} className='col-4'>{2}</button>
                        <button onClick={() => handleGuess('3')} className='col-4'>{3}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('4')} className='col-4'>{4}</button>
                        <button onClick={() => handleGuess('5')} className='col-4'>{5}</button>
                        <button onClick={() => handleGuess('6')} className='col-4'>{6}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('7')} className='col-4'>{7}</button>
                        <button onClick={() => handleGuess('8')} className='col-4'>{8}</button>
                        <button onClick={() => handleGuess('9')} className='col-4'>{9}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('0')} className='col-12'>{0}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('B')} className='col-12'>{'BACK'}</button>
                    </div>
                </div>
        </>
    );
}

export default NumberPad;