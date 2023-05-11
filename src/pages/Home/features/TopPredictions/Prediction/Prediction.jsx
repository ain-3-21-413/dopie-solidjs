import { useNavigate } from '@solidjs/router';
import styles from './Prediction.module.css';

export default function Prediction(props) {

    const navigate = useNavigate();

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
                <div class={styles.teams} onClick={() => navigate("/predictions/" + props.slug)}>
                    <p>
                        {props.home} - {props.away}
                    </p>
                </div>
            </div>
            <div class={styles.footer}>
                <span class={styles.predictor} onClick={() => navigate("/predictors/" + props.predictorSlug)}>
                    {props.predictorName}
                </span>
                <span class={styles.coefficient}>
                    {props.coefficient}
                </span>
            </div>
        </div>
    )
}
