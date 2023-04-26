import Prediction from './Prediction/Prediction';
import styles from './TopPredictions.module.css';

const data = {
    predictions: [
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            coefficient: '2.48',
        },
    ]
}

export default function TopPredictions() {

    return (
        <div class={styles.top_predictions}>
            <h3>
                Прогнозы экспертов
            </h3>
            <div class={styles.predictions}>
                <For each={data.predictions}>{(prediction) =>
                    <Prediction 
                        time={prediction.time} 
                        date={prediction.date} 
                        league={prediction.league} 
                        predictionDateTime={prediction.predictionDateTime} 
                        home={prediction.home} 
                        away={prediction.away} 
                        predictorName={prediction.predictorName}
                        coefficient={prediction.coefficient}
                    />
                }</For>
            </div>
        </div>
    )
}
