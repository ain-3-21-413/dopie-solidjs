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
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
        },
        {
            time: '01:15',
            date: '28 апр',
            league: 'Премьер Лига',
            predictionDateTime: 'Сегодня в 18:42',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            predictorName: 'Роман Гутцайт',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '28-04-2023-tottenham-manchester-united-roman-gudzeit',
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
                        slug={prediction.slug}
                        predictorSlug={prediction.predictorSlug}
                    />
                }</For>
            </div>
        </div>
    )
}
