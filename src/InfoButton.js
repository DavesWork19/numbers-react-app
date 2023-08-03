import { useState } from 'react';
import { GAME_INFO_1, GAME_INFO_2 } from './constants'


const InfoButton = () => {
    const [infoButtonState, setInfoButtonState] = useState(true);

    const handleInfoButton = () => {
        setInfoButtonState(false);
        setTimeout(() => {
            setInfoButtonState(true);
        }, 5000)
    }

    return (
        <div className='pt-5 mt-5 text-center'>
            {infoButtonState ? 
            <button onClick={handleInfoButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"40px"} height={"40px"}><title>Info</title><g id="Info"><g id="Info-2" data-name="Info"><path d="M256,73.8247a182.18,182.18,0,0,0-182.18,182.18c0,100.6173,81.567,182.1708,182.18,182.1708a182.1753,182.1753,0,1,0,0-364.3506Zm43.2513,279.3168q-14.0414,5.5364-22.4037,8.4375a58.9693,58.9693,0,0,1-19.4238,2.9007q-16.9938,0-26.424-8.28a26.8329,26.8329,0,0,1-9.4266-21.0582,73.7774,73.7774,0,0,1,.7029-10.134q.7128-5.1813,2.277-11.6982l11.6937-41.3964c1.0413-3.9726,1.9242-7.7166,2.6325-11.268a48.9362,48.9362,0,0,0,1.0629-9.7029q0-7.9366-3.27-11.0655c-2.1789-2.0736-6.3369-3.1284-12.5109-3.1284a33.0053,33.0053,0,0,0-9.3033,1.4238c-3.177.9405-5.8977,1.8459-8.1828,2.6892l3.1293-12.762q11.4966-4.6791,21.99-8.0064a65.7562,65.7562,0,0,1,19.89-3.34q16.8682,0,26.0244,8.1648,9.1557,8.1608,9.1494,21.1905c0,1.8018-.2016,4.9743-.6327,9.5013a63.9185,63.9185,0,0,1-2.3427,12.48l-11.65,41.23a112.86,112.86,0,0,0-2.5578,11.3634,58.9524,58.9524,0,0,0-1.1331,9.6246q0,8.2269,3.6648,11.2059,3.6977,2.9929,12.74,2.98a36.9426,36.9426,0,0,0,9.6372-1.4949,54.9418,54.9418,0,0,0,7.7958-2.61Zm-2.0745-167.4846a27.718,27.718,0,0,1-19.6128,7.5942,28.0312,28.0312,0,0,1-19.7181-7.5942,24.67,24.67,0,0,1,0-36.7821,27.9085,27.9085,0,0,1,19.7181-7.6464,27.6127,27.6127,0,0,1,19.6128,7.6464,24.83,24.83,0,0,1,0,36.7821Z"/></g></g></svg>
            </button>
            :
            <div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        {GAME_INFO_1}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        {GAME_INFO_2}
                    </div>
                </div>
                <a href="https://icons8.com/icon/80585/info">Info</a> icon by <a href="https://icons8.com">Icons8</a>
            </div>
            }
        </div>
    );
}

export default InfoButton;
