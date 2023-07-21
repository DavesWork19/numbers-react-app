import './MathQuestion.css'

const MathQuestion = props => {
    const firstNumber = props.question[0]
    const operation = props.question[1]
    const secondNumber = props.question[2]

    return(
        <div className='container w-50 p-2'>
            <div className='border border-primary'>
                <div className='ps-4'>{firstNumber}</div>
                <div>
                <span className='me-3'>{operation}</span><span>{secondNumber}</span>
                </div>
            </div>
        </div>
    );
}

export default MathQuestion;