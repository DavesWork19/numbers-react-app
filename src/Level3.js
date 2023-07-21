import { useNavigate } from "react-router-dom";
import TheGame from "./TheGame";

const Level3 = () => {
    const navigate = useNavigate();
    const handleButtonClick = navigation => {
        navigate(navigation);
    }

    return (
        <>
            <header className="container text-center  mb-4 mt-2">
                <h1>The Numbers Game</h1>
                <h2>Welcome To Level 3</h2>
            </header>
            <main className="container text-center">
                <TheGame level='level3' />
                <button type="button" onClick={() => handleButtonClick("/")} className="btn btn-light border">
                    Home
                </button>
            </main>
        </>
    );
}

export default Level3;
