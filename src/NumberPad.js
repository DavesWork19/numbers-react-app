import { useState } from 'react';

const NumberPad = props => {
    const [guess, setGuess] = useState('');
    const [mathQuestionBorder, setMathQuestionBorder] = useState('border border-primary');
    const updateCount = props.data[0];
    const finalResult = props.data[1];
    const firstNumber = props.data[2];
    const operation = props.data[3];
    const secondNumber = props.data[4];
    
    
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
                    setMathQuestionBorder('border border-primary');
                    updateCount();
                    setGuess('');
                }, 500)
                setTimeout(() => {
                    setMathQuestionBorder('border border-success border-5');
                }, 100)
            }
        }
    }


    return (
        <div className='container'>
            <div className={`row w-50 mx-auto my-2 ${mathQuestionBorder} rounded-3`}>
                <div className='ps-4 fs-3'>{firstNumber}</div>
                <div className='fs-3'>
                    <span className='me-3'>{operation}</span><span>{secondNumber}</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 p-2 fs-3'>
                    {!!guess ? guess : '_'}
                </div>
            </div>
            <div className='row border-top border-dark'>
                <div className='col-12'>
                    <div className='row'>
                        <button onClick={() => handleGuess('1')} className='btn btn-outline-dark col-4 p-2 fs-3'>{1}</button>
                        <button onClick={() => handleGuess('2')} className='btn btn-outline-dark col-4 p-2 fs-3'>{2}</button>
                        <button onClick={() => handleGuess('3')} className='btn btn-outline-dark col-4 p-2 fs-3'>{3}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('4')} className='btn btn-outline-dark col-4 p-2 fs-3'>{4}</button>
                        <button onClick={() => handleGuess('5')} className='btn btn-outline-dark col-4 p-2 fs-3'>{5}</button>
                        <button onClick={() => handleGuess('6')} className='btn btn-outline-dark col-4 p-2 fs-3'>{6}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('7')} className='btn btn-outline-dark col-4 p-2 fs-3'>{7}</button>
                        <button onClick={() => handleGuess('8')} className='btn btn-outline-dark col-4 p-2 fs-3'>{8}</button>
                        <button onClick={() => handleGuess('9')} className='btn btn-outline-dark col-4 p-2 fs-3'>{9}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('0')} className='btn btn-outline-dark col-12 p-2 fs-3'>{0}</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => handleGuess('B')} className='btn btn-outline-dark col-12 p-2 fs-3'>{'BACK'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumberPad;