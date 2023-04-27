import styles from './Prediction.module.css';

export default function Prediction(props) {

    return (
        <div class={styles.prediction}>
            <div class={styles.top}>
                <span>
                    {props.prediction.predictorName}
                </span>
            </div>
            <div class={styles.center}>
                <div class={styles.fixture}>
                    <div class={styles.info}>
                        <span>
                            {props.prediction.date}
                        </span>
                        <span>
                            {props.prediction.time}
                        </span>
                    </div>
                    <div class={styles.teams}>
                        <span>
                            {props.prediction.home}
                        </span>
                        <span>
                            -
                        </span>
                        <span>
                            {props.prediction.away}
                        </span>
                    </div>
                </div>
                <div class={styles.outcome}>
                    <span>
                        {props.prediction.coefficient}
                    </span>
                    <span>
                        {props.prediction.outcomeName}
                    </span>
                </div>
                <div class={styles.intro}>
                    <For each={props.prediction.intro}>{(paragraph) =>
                        <p>
                            {paragraph}
                        </p>
                    }</For>
                </div>
                <span class={styles.link}>
                    Повторить прогноз
                </span>
            </div>
        </div>
    )
}
