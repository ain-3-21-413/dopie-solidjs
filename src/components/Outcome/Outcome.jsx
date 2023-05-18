import { createSignal, onMount, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import styles from './Outcome.module.css';
import { ModalContext } from '../../providers/ModalProvider';

export default function Outcome(props) {

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    const outcomeStyles = `${styles.outcome}`;
    const [style, setStyle] = createStore({
        "flex-direction": "column",
        "justify-content": "space-between",
        "align-items": "start",
    });

    onMount(() => {
        if (props.direction == "horizontal") {
            setStyle("flex-direction", "row"),
            setStyle("align-items", "center")
        }
    })
    
    return (
        <div 
            class={outcomeStyles}
            style={style}
        >
            <div class={styles.coefficient}>
                {props.coefficient}
            </div>
            <div class={styles.body}>
                <span class={styles.name}>
                    {props.name}
                </span>
                <span class={styles.count}>
                    {props.count}
                </span>
            </div>
            <button onClick={onOpen}>
                +
            </button>
        </div>
    )
}
