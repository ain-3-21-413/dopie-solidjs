import styles from './DPMatch.module.css';

export default function DPMatch(props) {

    return (
        <div class={styles.match}>
            <div class={styles.top}>
                <span>
                    {props.time}
                </span>
                <span>
                    {props.date}
                </span>
                <span>
                    |
                </span>
                <span>
                    {props.country}
                </span>
                <span class={styles.dot}>

                </span>
                <span>
                    {props.league}
                </span>
            </div>
            <div class={styles.bottom}>
                <div class={styles.teams}>
                    <span>
                        {props.home}
                    </span>
                    <span>
                        {props.away}
                    </span>
                </div>
                <button>
                    +
                </button>
            </div>
        </div>
    )
}
