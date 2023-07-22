import TheGame from './TheGame';
import Header from './Header';

const Level3 = () => {

    return (
        <>
            <Header level={'3'} />
            <main className='container text-center'>
                <TheGame level='level3' />
            </main>
        </>
    );
}

export default Level3;
