import TheGame from './TheGame';
import Header from './Header';

const Level2 = () => {

    return (
        <>
            <Header level={'2'} />
            <main className='container text-center'>
                <TheGame level='level2' />
            </main>
        </>
    );
}

export default Level2;
