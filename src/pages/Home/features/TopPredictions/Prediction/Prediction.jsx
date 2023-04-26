import styles from './Prediction.module.css';

export default function Prediction(props) {

    return (
        <div class={styles.prediction}>
            <div class={styles.body}>
                <div class={styles.top}>
                    <span>
                        {props.time}.
                    </span>
                    <span>
                        {props.date}
                    </span>
                </div>
                <div class={styles.info}>
                    <span>
                        {props.league}
                    </span>
                    <span class={styles.dot}></span>
                    <span>
                        {props.predictionDateTime}
                    </span>
                </div>
                <div class={styles.teams}>
                    <p>
                        {props.home} - {props.away}
                    </p>
                </div>
            </div>
            <div class={styles.footer}>
                <span>
                    {props.predictorName}
                </span>
                <span class={styles.coefficient}>
                    {props.coefficient}
                </span>
            </div>
        </div>
    )
}
