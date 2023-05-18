import { createSignal, onMount } from 'solid-js';
import PredictionModal from '../../../../components/PredictionModal/PredictionModal';
import DPMatch from './DPMatch/DPMatch';
import styles from './TopMatches.module.css';
import axios from 'axios';
import { createStore } from 'solid-js/store';

const initData = {
    matches: [
        {
            time: '00:45',
            date: '27 апр',
            country: 'Англия',
            league: 'Премьер Лига',
            home: 'Вест Хэм',
            away: 'Ливерпуль',
            slug: "27-04-2023-west-ham-liverpool",
        },
    ]  
}

export default function TopMatches() {

    const [data, setData] = createStore(initData);

    onMount(() => {
        axios.get("http://localhost:8080/api/data/top-matches")
        .then(response => {
            console.log(response.data);
            setData("matches", response.data)
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
