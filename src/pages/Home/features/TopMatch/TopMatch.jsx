import Button from '../../../../components/Button/Button';
import Outcome from '../../../../components/Outcome/Outcome';
import styles from './TopMatch.module.css';

const data = {
    fixture: {
        home: 'Манчестер Сити',
        away: 'Арсенал',
        time: '01:00',
        date: '27 апр',
        country: 'Англия',
        league: 'Премьер-лига',
    },
    outcomes: [
        {
            name: 'ИТ1Б (2.5)',
            coefficient: '3.00',
            count: '72 прогноза',
        },
        {
            name: 'П1',
            coefficient: '1.65',
            count: '70 прогнозов',
        },
        {
            name: 'Ф1 (-1.5)',
            coefficient: '2.63',
            count: '60 прогнозов',
        }
    ]
}

export default function TopMatch() {

    return (
        <div class={styles.top_match}>
            <div class={styles.fixture}>
                <div class={styles.top}>
                    <h3>
                        ТОП МАТЧ
                    </h3>
                </div>
                <div class={styles.center}>
                    <div class={styles.info}>
                        <span>
                            {data.fixture.time}
                        </span>
                        <span>
                            {data.fixture.date}
                        </span>
                        <span>
                            |
                        </span>
                        <span>
                            {data.fixture.country}
                        </span>
                        <span class={styles.dot}></span>
                        <span>
                            {data.fixture.league}
                        </span>
                    </div>
                    <div class={styles.teams}>
                        <span>
                            {data.fixture.home}
                        </span>
                        <span>
                            -
                        </span>
                        <span>
                            {data.fixture.away}
                        </span>
                    </div>  
                </div>
                <Button variant="fill">
                    ПРОГНОЗ РЕДАКЦИИ
                </Button>
            </div>
            <div class={styles.outcomes}>
                <div class={styles.one}>
                    <Outcome coefficient={data.outcomes[0].coefficient} name={data.outcomes[0].name} count={data.outcomes[0].count} wide />
                </div>
                <div class={styles.two}>
                    <Outcome coefficient={data.outcomes[1].coefficient} name={data.outcomes[1].name} count={data.outcomes[1].count} />
                </div>
                <div class={styles.three}>
                    <Outcome coefficient={data.outcomes[2].coefficient} name={data.outcomes[2].name} count={data.outcomes[2].count} />
                </div>
            </div>
        </div>
    )
}
