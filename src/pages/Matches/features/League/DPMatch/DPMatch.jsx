import { For } from 'solid-js';
import styles from './DPMatch.module.css';

export default function DPMatch(props) {

    return (
        <div class={styles.match}>
            <div class={styles.left}>
                <div class={styles.info}>
                    <span class={styles.time}>
                        {props.match.time}
                    </span>
                    <span>
                        {props.match.date}
                    </span>
                </div>
                <div class={styles.teams}>
                    <span>
                        {props.match.home}
                    </span>
                    <span>
                        {props.match.away}
                    </span>
                </div>
            </div>
            <div class={styles.right}>
                <div class={styles.outcomes}>
                    <For each={props.match.outcomes}>{(outcome) =>
                        <div class={styles.outcome}>
                            <span>
                                {outcome.name}
                            </span>
                            <span class={styles.coefficient}>
                                {outcome.coefficient}
                            </span>
                        </div>
                    }</For>
                </div>
                <button>
                    +
                </button>
            </div>
        </div>
    )
}
