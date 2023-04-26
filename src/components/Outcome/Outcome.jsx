import styles from './Outcome.module.css';

export default function Outcome(props) {

    const outcomeStyles = `${styles.outcome}`;
    
    return (
        <div class={outcomeStyles}>
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
            <button>
                +
            </button>
        </div>
    )
}
