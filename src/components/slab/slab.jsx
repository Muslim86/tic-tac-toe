import style from './slab.module.css';
import {useState} from "react";
import {O, X} from "../../constants/constants";

const Slab = (props) => {
    const [type, setType] = useState('')

    const changeSlabType = () => {
        console.log(props.currentPlayer)
        if (type) return;
        if (props.gameStats.includes('Победил')) return;
        const player = props.currentPlayer;
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
            <div className={style.marker}>
                {type}
            </div>
        </div>
    )
}

export default Slab;