import { For } from 'solid-js';
import styles from './League.module.css';
import DPMatch from './DPMatch/DPMatch';

export default function League(props) {

    return (
        <div class={styles.league}>
            <div class={styles.info}>
                <span>
                    {props.league.country}
                </span>
                <span class={styles.dot}>

                </span>
                <span>
                    {props.league.league}
                </span>
            </div>
            <div class={styles.matches}>
                <For each={props.league.matches}>{(match) =>
                    <DPMatch match={match} />
                }</For>
            </div>
        </div>
    )
}
