import { useState } from 'react';
import MathQuestion from './MathQuestion';
import NumberPad from './NumberPad';
import Timer from './Timer';

const TheGame = props => {
    const level1MaxNumber = 20;
    const level2MaxNumber = 30;
    const level3MaxNumber = 40;
    const level1Operations = ['+', '-']
    const level2Operations = ['+', '-', 'X']
    const level3Operations = ['+', '-', 'X', '%']

    let firstNumber = 0;
    let secondNumber = 0;
    let operation;
    let finalResult = 0;

    const [gameButton, setGameButton] = useState({text : 'Start Game!', isPlaying : false});
    const [correctMathQuestions, setCorrectMathQuestions] = useState(0);


    if(props.level === 'level1') {
        operation = level1Operations[Math.floor(Math.random() * level1Operations.length)];
        if(operation === '+'){
            firstNumber = Math.floor(Math.random() * level1MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level1MaxNumber) + 1;
            finalResult = firstNumber + secondNumber;
        }
        else {
            firstNumber = Math.floor(Math.random() * level1MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level1MaxNumber) + 1;
            if(firstNumber < secondNumber){
                const holder = firstNumber;
                firstNumber = secondNumber;
                secondNumber = holder;
            }
            finalResult = firstNumber - secondNumber;
        }
    }
    else if(props.level === 'level2') {
        operation = level2Operations[Math.floor(Math.random() * level2Operations.length)];
        firstNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
        secondNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
        operation = level2Operations[Math.floor(Math.random() * level2Operations.length)];
        if(operation === '+'){
            firstNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            finalResult = firstNumber + secondNumber;
        }
        else if(operation === '-'){
            firstNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            if(firstNumber < secondNumber){
                const holder = firstNumber;
                firstNumber = secondNumber;
                secondNumber = holder;
            }
            finalResult = firstNumber - secondNumber;
        }
        else{
            firstNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level2MaxNumber) + 1;
            finalResult = firstNumber * secondNumber;
        }
    }
    else if(props.level === 'level3') {
        operation = level3Operations[Math.floor(Math.random() * level3Operations.length)];
        firstNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
        secondNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
        operation = level3Operations[Math.floor(Math.random() * level3Operations.length)];
        if(operation === '+'){
            firstNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            finalResult = firstNumber + secondNumber;
        }
        else if(operation === '-'){
            firstNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            if(firstNumber < secondNumber){
                const holder = firstNumber;
                firstNumber = secondNumber;
                secondNumber = holder;
            }
            finalResult = firstNumber - secondNumber;
        }
        else if(operation === 'X'){
            firstNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            secondNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            finalResult = firstNumber * secondNumber;
        }
        else{
            while(firstNumber % secondNumber !== 0){
                firstNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
                secondNumber = Math.floor(Math.random() * level3MaxNumber) + 1;
            }
            finalResult = firstNumber / secondNumber;
        }
    }
    

    const handleMathQuestions = () => {
        setCorrectMathQuestions(current => current + 1);
    }

    const handleGameButton = () => {
        if(gameButton.isPlaying === true){
            setGameButton({text : 'Start Game!', isPlaying : false});
            setCorrectMathQuestions(0);
        }
        else{
            setGameButton({text : 'Restart Game', isPlaying : true});
        }
    }

    return (
        <div className='container text-center'>
            <div>
                {gameButton.isPlaying && <Timer />}
            </div>
            <div className='container'>
                < MathQuestion question={[firstNumber,operation,secondNumber]} />
                < NumberPad data={[handleMathQuestions, finalResult]} />
            </div>
            <div>
                {correctMathQuestions}{'   Correct'}
            </div>
            <div>
                <button type='button' onClick={handleGameButton} className='btn btn-light border mt-5 mb-3'>{gameButton.text}</button>
            </div>
        </div>
    );
    
}

export default TheGame;