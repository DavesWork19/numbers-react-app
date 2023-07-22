import TheGame from './TheGame';
import Header from './Header';

const Level1 = () => {

    return (
        <>
            <Header level={'1'} />
            <main className='container text-center'>
                <TheGame level='level1' />
            </main>
        </>
    );
}

export default Level1;
