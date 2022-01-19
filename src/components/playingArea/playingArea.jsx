import style from './playingArea.module.css';
import Slab from "../slab/slab";
import {useEffect, useRef, useState} from "react";
import {O, X} from "../../constants/constants";

const PlayingArea = () => {
    const [currentPlayer, setCurrentPlayer] = useState(X);
    const [slabsType, setSlabsTypes] = useState(['', '', '', '', '', '', '', '', '']);
    const [gameStats, setGameStats] = useState(`Сейчас ход ${currentPlayer}`);
    const [restartBtn, setRestartBtn] = useState();
    const slabsRef = useRef();
    const buttonRestart = <button onClick={ () => {
        window.location.reload();
    }} type="submit">Сыграть снова</button>

    const createSlabs = () => {
        return slabsType.map((item, index) => <Slab
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            slabsType={slabsType}
            setSlabsTypes={setSlabsTypes}
            gameStats={gameStats}
            number={index}
            key={index}/>)
    }

    useEffect(() => {
        const player = currentPlayer === X ? O : X;
        if (checkSlabs(slabsType, player)) {
            setGameStats(`Победил игрок ${player} !`)
            setRestartBtn(buttonRestart)
            return;
        }
        if (!slabsType.some( item => item === '')) {
            setGameStats(`Ничья!`)
            setRestartBtn(buttonRestart)
            return;
        }

        setGameStats(`Сейчас ход ${currentPlayer}`)
    }, [currentPlayer])

    const checkSlabs = (slabs, player) => {
        let result = false;
        if (
            slabs[0] === player && slabs[1] === player && slabs[2] === player ||
            slabs[3] === player && slabs[4] === player && slabs[5] === player ||
            slabs[6] === player && slabs[7] === player && slabs[8] === player ||
            slabs[0] === player && slabs[3] === player && slabs[6] === player ||
            slabs[1] === player && slabs[4] === player && slabs[7] === player ||
            slabs[2] === player && slabs[5] === player && slabs[8] === player ||
            slabs[0] === player && slabs[4] === player && slabs[8] === player ||
            slabs[2] === player && slabs[4] === player && slabs[6] === player
        ) result = true;
        return result;
    };

    return (
        <div className={style.area}>
            <div ref={slabsRef} className={style.field}>{createSlabs()}</div>
            <div>
                <div>
                    <h1>{gameStats} </h1>
                </div>
                <div className={style.buttonWrapper}>
                    {restartBtn}
                </div>
            </div>

        </div>
    )
}

export default PlayingArea;