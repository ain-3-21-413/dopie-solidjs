import DPMatch from './DPMatch/DPMatch';
import styles from './TopMatches.module.css';

const data = {
    matches: [
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
        },
    ]  
}

export default function TopMatches() {

    return (
        <div class={styles.top_matches}>
            <h3>
                Топ матчи
            </h3>
            <div class={styles.matches}>  
                <For each={data.matches}>{(match) =>
                    <DPMatch 
                    time={match.time} 
                    date={match.date} 
                    country={match.country} 
                    league={match.league} 
                    home={match.home} 
                    away={match.away} 
                />
                }</For>
            </div>
        </div>
    )
}
