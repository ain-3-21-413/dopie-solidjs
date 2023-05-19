import { createSignal, onMount } from 'solid-js';
import PredictionModal from '../../../../components/PredictionModal/PredictionModal';
import DPMatch from './DPMatch/DPMatch';
import styles from './TopMatches.module.css';
import axios from 'axios';
import { createStore } from 'solid-js/store';

const initData = {
    matches: [
        {
            time: '17:30',
            date: '20 may',
            country: 'England',
            league: 'Premier League',
            home: 'Tottenham',
            away: 'Brentford',
            slug: "5459",
        },
        {
            time: '20:00',
            date: '20 may',
            country: 'England',
            league: 'Premier League',
            home: 'Bornmouth',
            away: 'Manchester United',
            slug: "5460",
        },
        {
            time: '20:00',
            date: '20 may',
            country: 'England',
            league: 'Premier League',
            home: 'Fullham',
            away: 'Crystal Palace',
            slug: "5461",
        },
        {
            time: '17:30',
            date: '20 may',
            country: 'England',
            league: 'Premier League',
            home: 'Liverpool',
            away: 'Aston Villa',
            slug: "5462",
        },
    ]  
}

export default function TopMatches() {

    const [data, setData] = createStore(initData);

    onMount(() => {
        axios.get("http://localhost:8080/api/matches/top-matches")
        .then(response => {
            // setData("matches", response.data)
        })
        .catch(error => {
            console.log(error);
        })
    })

    return (
        <div class={styles.top_matches}>
            <PredictionModal />
            <h3>
                Топ матчи
            </h3>
            <div class={styles.matches}>  
                <For each={data.matches}>{(match) =>
                    <DPMatch match={match} />
                }</For>
            </div>
        </div>
    )
}
