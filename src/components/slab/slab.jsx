import style from './slab.module.css';
import {useRef, useState} from "react";
import {O, X} from "../../constants/constants";

const Slab = (props) => {
    const [type, setType] = useState('')
    const slabRef = useRef();

    const changeSlabType = () => {
        if (type) return;
        if (props.gameStats.includes('Победил')) return;
        const player = props.currentPlayer;
        slabRef.current.classList.toggle(style.rotate)
        let slabsType = props.slabsType;
        setType(player);
        if (player === X) {
            props.setCurrentPlayer(O)
            slabsType[props.number] = X
            props.setSlabsTypes(slabsType)
        } else {
            props.setCurrentPlayer(X)
            slabsType[props.number] = O
            props.setSlabsTypes(slabsType)
        }
    };

    return (
        <div onClick={() => changeSlabType()} className={style.slab}>
            <div ref={slabRef}>
                {type}
            </div>
        </div>
    )
}

export default Slab;