import { For } from 'solid-js';
import styles from './Matches.module.css';
import League from './features/League/League';

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

    return (
        <div class={styles.matches}>
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
