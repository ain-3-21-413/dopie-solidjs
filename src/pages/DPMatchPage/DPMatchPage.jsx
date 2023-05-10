import { useParams } from '@solidjs/router';
import styles from './DPMatchPage.module.css';
import Outcome from '../../components/Outcome/Outcome';
import { For } from 'solid-js';
import Prediction from '../Predictions/Prediction/Prediction';

const data = {
    article: {
        fixture: {
            country: 'Англия',
            league: 'Премьер-лига',
            time: '01:15',
            date: '28 апреля',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
        },
        preview: {
            intro: `Завершать программу 33-го тура АПЛ будет матч между “Тоттенхэмом“ и “Манчестер Юнайтед“. Их очная встреча пройдет 27 апреля 2023 года на стадионе “Тоттенхэм Хотспур“. Оправдают ли гости статус фаворита поединка?`,
            lineups: {
                home: {
                    formation: `3-4-2-1`,
                    lineup: `Ллорис – Ленгле, Ромеро, Дайер – Порро, Перишич, Скипп, Хейбьерг – Сон, Кулусевски – Кейн`,
                    willMiss: `Биссума, Бентанкур, Эмерсон (все – травма)`,
                },
                away: {
                    formation: `4-3-3`,
                    lineup: `Де Хеа – Уан-Биссака, Далот, Шоу, Линделеф – Забитцер, Каземиро, Эриксен – Антони, Рэшфорд, Вегхорст`,
                    willMiss: `ван де Бек, Гарначо, Хитон, Мактоминай, Джонс, Варан, Мартинез (все – травма), Гринвуд (неактивен)`,
                },
            },
            predictions: {
                forMainOutcomes: `У хозяев всего одна победа в пяти последних поединках, а к отчетному туру они подходят на серии из двух поражений. Причем, в выходные лондонцы были уничтожены “Ньюкаслом“ 1:6. Теперь “шпоры“ отстают на шесть очков от четвертой строчки в таблице, которую занимает именно “Юнайтед“. Правда, у команды тен Хага есть две игры в запасе. Сами манкунианцы в выходные вышли в финал Кубка Англии, а в чемпионате идут на серии из трех побед. Кроме того, у “Манчестер Юнайтед“ четыре подряд победы над “Тоттенхэмом“. Все это говорит в пользу пари на П2 за 2.47`,
                forTotalGoals: `Также эта встреча имеет все шансы пройти в открытой борьбе и обернуться голами. “Тоттенхэм“ в кризисе, но еще борется за еврокубки и дома ему необходимо атаковать и рисковать, что и должно провоцировать игру на встречных курсах. Тем более что “Юнайтед“ любит атаковать и тоже заинтересован в победе. Средний тотал матчей “Тоттенхэма“ в этом сезоне 3.4 гола, а “Манчестер Юнайтед“ – 2.8. Ставим на ТБ (2.5) за 1.64`,
            },
            author: `Артем Иванов`,
        },
    },
    popularOutcomes: [
        {
            name: 'П2',
            coefficient: '2.44',
            count: '84 прогноза',
        },
        {
            name: 'ТБ (2.5)',
            coefficient: '1.69',
            count: '24 прогноза',
        },
        {
            name: 'Ф2 (0)',
            coefficient: '1.79',
            count: '12 прогнозов',
        },
        {
            name: 'ИТ2Б (1.5)',
            coefficient: '1.98',
            count: '12 прогнозов',
        },
        {
            name: 'ТБ (3.5) ',
            coefficient: '2.50',
            count: '12 прогнозов',
        },
        {
            name: 'ТБ (3.5) ',
            coefficient: '2.50',
            count: '12 прогнозов',
        },
    ],
    predictions: [
        {
            predictorName: 'Роман Гутцайт',
            date: '28 апр',
            time: '01:15',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            coefficient: '2.48',
            outcomeName: 'П2',
            intro: [
                'Известный телекомментатор и футбольный эксперт Роман Гутцайт считает, что на данном отрезке сезона Манчестер Юнайтед значительно превосходит Тоттенхэм.',
                'Встреча 33-го тура Премьер-Лиги состоится 27-го апреля в Лондоне. Футболисты Тоттенхэма одержали всего одну победу за 5 последних матчей в рамках АПЛ...',
            ],
        },
        {
            predictorName: 'Роман Гутцайт',
            date: '28 апр',
            time: '01:15',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            coefficient: '2.48',
            outcomeName: 'П2',
            intro: [
                'Известный телекомментатор и футбольный эксперт Роман Гутцайт считает, что на данном отрезке сезона Манчестер Юнайтед значительно превосходит Тоттенхэм.',
                'Встреча 33-го тура Премьер-Лиги состоится 27-го апреля в Лондоне. Футболисты Тоттенхэма одержали всего одну победу за 5 последних матчей в рамках АПЛ...',
            ],
        },
        {
            predictorName: 'Роман Гутцайт',
            date: '28 апр',
            time: '01:15',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
            coefficient: '2.48',
            outcomeName: 'П2',
            intro: [
                'Известный телекомментатор и футбольный эксперт Роман Гутцайт считает, что на данном отрезке сезона Манчестер Юнайтед значительно превосходит Тоттенхэм.',
                'Встреча 33-го тура Премьер-Лиги состоится 27-го апреля в Лондоне. Футболисты Тоттенхэма одержали всего одну победу за 5 последних матчей в рамках АПЛ...',
            ],
        },
    ],
    otherMatches: [
        {
            time: '00:45',
            date: '28 апр',
            home: 'Тоттенхэм',
            away: 'Манчестер Юнайтед',
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
    ]

}

export default function DPMatchPage() {

    const params = useParams();
    const slug = params.slug;

    return (
        <div class={styles.match}>
            <div class={styles.fixture}>
                <div class={styles.top}>
                    <span>
                        {data.article.fixture.country}
                    </span>
                    <span class={styles.dot}></span>
                    <span>
                        {data.article.fixture.league}
                    </span>
                </div>
                <div class={styles.bottom}>
                    <span class={styles.home}>
                        {data.article.fixture.home}
                    </span>
                    <div class={styles.dateTime}>
                        <span>
                            {data.article.fixture.time}
                        </span>
                        <span>
                            {data.article.fixture.date}
                        </span>
                    </div>
                    <span class={styles.away}>
                        {data.article.fixture.away}
                    </span>
                </div>
            </div>
            <article>
                <h2>
                    Прогноз редакции на матч
                </h2>
                <p>
                    {data.article.preview.intro}
                </p>
                <h3>
                    Ориентировочные составы на матч {data.article.fixture.home} - {data.article.fixture.away}
                </h3>
                <div>
                    <p>
                        <b>"{data.article.fixture.home}"</b> ({data.article.preview.lineups.home.formation}): {data.article.preview.lineups.home.lineup}
                    </p>
                    <p>
                        <b>Не сыграют</b>: {data.article.preview.lineups.home.willMiss}
                    </p>
                </div>
                <div>
                    <p>
                        <b>"{data.article.fixture.away}"</b> ({data.article.preview.lineups.away.formation}): {data.article.preview.lineups.away.lineup}
                    </p>
                    <p>
                        <b>Не сыграют</b>: {data.article.preview.lineups.away.willMiss}
                    </p>
                </div>
                <div class={styles.predictions}>
                    <div>
                        <h3>
                            Прогноз на основные исходы матча {data.article.fixture.home} - {data.article.fixture.away}
                        </h3>
                        <p>
                            {data.article.preview.predictions.forMainOutcomes}
                        </p>
                    </div>
                    <div>
                        <h3>
                            Прогноз на тотал голов {data.article.fixture.home} - {data.article.fixture.away}
                        </h3>
                        <p>
                            {data.article.preview.predictions.forTotalGoals}
                        </p>
                    </div>
                </div>
                <p>
                    <b>Автор прогноза </b>: {data.article.preview.author}
                </p>
            </article>
            <div class={styles.popular_outcomes}>
                <h2>
                    На что ставят
                </h2>
                <div class={styles.outcomes}>
                    <For each={data.popularOutcomes}>{(popularOutcome) =>
                        <Outcome direction="horizontal" coefficient={popularOutcome.coefficient} name={popularOutcome.name} count={popularOutcome.count} />
                    }</For>
                </div>
            </div>
            <div class={styles.predictions}>
                <h2>
                    Прогнозы на матч {data.article.fixture.home} - {data.article.fixture.away}
                </h2>
                <div class={styles.predictions_list}>
                    <For each={data.predictions}>{(prediction) =>
                        <Prediction prediction={prediction} />
                    }</For>
                </div>
            </div>
        </div>
    )
}
