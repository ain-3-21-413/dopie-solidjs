import { useNavigate } from '@solidjs/router';
import styles from './DPMatch.module.css';
import { ModalContext } from '../../../../../providers/ModalProvider';
import { useContext } from 'solid-js';

export default function DPMatch(props) {

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    const navigate = useNavigate();

    return (
        <div class={styles.match}>
            <div class={styles.top}>
                <span>
                    {props.match.time}
                </span>
                <span>
                    {props.date}
                </span>
                <span>
                    |
                </span>
                <span>
                    {props.match.date}
                </span>
                <span class={styles.dot}>

                </span>
                <span>
                    {props.match.league}
                </span>
            </div>
            <div class={styles.bottom}>
                <div class={styles.teams} onClick={() => navigate("/matches/" + props.match.id)}>
                    <span>
                        {props.match.home.shortName}
                    </span>
                    <span>
                        {props.match.away.shortName}
                    </span>
                </div>
                <button onClick={onOpen}>
                    +
                </button>
            </div>
        </div>
    )
}
