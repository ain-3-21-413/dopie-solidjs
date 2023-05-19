import { For, createSignal, onMount } from 'solid-js';
import styles from './Matches.module.css';
import League from './features/League/League';
import PredictionModal from '../../components/PredictionModal/PredictionModal';
import axios from 'axios';

const data = [
    {
        country: 'Англия',
        league: 'Премьер Лига',
        matches: [
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
        ],
    },
    {
        country: 'Англия',
        league: 'Премьер Лига',
        matches: [
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
        ],
    },
    {
        country: 'Англия',
        league: 'Премьер Лига',
        matches: [
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },{
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
        ],
    },
    {
        country: 'Англия',
        league: 'Премьер Лига',
        matches: [
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
            {
                time: '00:45',
                date: '28 апр',
                home: 'Тоттенхэм',
                away: 'Манчестер Юнайтед',
                slug: '28-04-2023-tottenham-manchester-united',
                outcomes: [
                    {
                        name: 'П1',
                        coefficient: '2.85',
                    },
                    {
                        name: 'X',
                        coefficient: '3.82',
                    },
                    {
                        name: 'П2',
                        coefficient: '2.48',
                    },
                ]
            },
        ],
    },
]

export default function Matches() {

    const [matches, setMatches] = createSignal();

    onMount(() => {
        axios.get("http://localhost:8080/api/matches")
        .then(res => {
            console.log(res.data);
            set(res.data);
        })
    })

    return (
        <div class={styles.matches}>
            <PredictionModal />
            <div>
                <h1>
                    Расписание матчей
                </h1>
                <p>
                    Здесь ты можешь выбрать матч для своего прогноза
                </p>
            </div>
            <div class={styles.leagues}>
                <For each={data}>{(league) =>
                    <League league={league} />
                }</For>
            </div>
        </div>
    )
}
