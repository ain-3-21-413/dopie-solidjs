import { useNavigate } from '@solidjs/router';
import styles from './Prediction.module.css';
import { ModalContext } from '../../../providers/ModalProvider';
import { useContext } from 'solid-js';

export default function Prediction(props) {

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    const navigate = useNavigate();

    return (
        <div class={styles.prediction}>
            <div class={styles.top}>
                <span class={styles.predictor} onClick={() => navigate("/predictors/" + props.prediction.predictorSlug)}>
                    {props.prediction.predictorName}
                </span>
            </div>
            <div class={styles.center}>
                <div class={styles.fixture}>
                    <div class={styles.info} onClick={() => navigate("/matches/" + props.matchSlug)}>
                        <span>
                            {props.prediction.date}
                        </span>
                        <span>
                            {props.prediction.time}
                        </span>
                    </div>
                    <div class={styles.teams} onClick={() => navigate("/matches/" + props.matchSlug)}>
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
                <div 
                    class={styles.intro} 
                    onClick={() => navigate("/predictions/" + props.slug)}
                >
                    <For each={props.prediction.intro}>{(paragraph) =>
                        <p>
                            {paragraph}
                        </p>
                    }</For>
                </div>
                <span class={styles.link} onClick={onOpen}>
                    Повторить прогноз
                </span>
            </div>
        </div>
    )
}
