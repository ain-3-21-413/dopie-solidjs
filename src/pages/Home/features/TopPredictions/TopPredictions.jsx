import Prediction from './Prediction/Prediction';
import styles from './TopPredictions.module.css';

const data = {
    predictions: [
        {
            time: '19:00',
            date: '24 may',
            league: 'Premier League',
            predictionDateTime: 'Today',
            home: 'Brighton Hove',
            away: 'Man City',
            predictorName: 'Roman Gudzeit',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '4',
        },
        {
            time: '19:00',
            date: '24 may',
            league: 'Premier League',
            predictionDateTime: 'Today',
            home: 'Bornmouth',
            away: 'Manchester United',
            predictorName: 'Roman Gudzeit',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '5',
        },
        {
            time: '19:00',
            date: '24 may',
            league: 'Premier League',
            predictionDateTime: 'Today',
            home: 'Fullham',
            away: 'Crystal Palace',
            predictorName: 'Roman Gudzeit',
            predictorSlug: 'roman-gudzeit',
            coefficient: '2.48',
            slug: '6',
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
