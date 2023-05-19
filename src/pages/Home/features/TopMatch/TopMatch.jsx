import { useNavigate } from '@solidjs/router';
import Button from '../../../../components/Button/Button';
import Outcome from '../../../../components/Outcome/Outcome';
import styles from './TopMatch.module.css';
import PredictionModal from '../../../../components/PredictionModal/PredictionModal';
import { createSignal, onMount } from 'solid-js';
import axios from 'axios';
import { createStore } from 'solid-js/store';
import { HStack, Heading } from '@hope-ui/solid';

const initData = {
    fixture: {
        home: 'Манчестер Сити',
        away: 'Арсенал',
        time: '01:00',
        date: '27 апр',
        league: 'Премьер-лига',
        slug: '27-04-2023-manchester-city-arsenal',
    },
    outcomes: [
        {
            name: 'П1',
            coefficient: '3.00',
            count: '72 прогноза',
        },
        {
            name: 'X',
            coefficient: '1.65',
            count: '70 прогнозов',
        },
        {
            name: 'П2',
            coefficient: '2.63',
            count: '60 прогнозов',
        }
    ]
}

export default function TopMatch() {

    const navigate = useNavigate();

    // const [data, setData] = createStore(initData);
    const [data, setData] = createStore(initData);
    const [fixtureId, setFixtureId] = createSignal();



    onMount(() => {
        axios.get("http://localhost:8080/api/matches/top-match")
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    })

    return (
        <div class={styles.top_match}>
            <PredictionModal />
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
                        <span class={styles.dot}></span>
                        <span>
                            {data.fixture.league}
                        </span>
                    </div>
                    <Heading fontSize={"$2xl"}>
                        {data.fixture.home} - {data.fixture.away}
                    </Heading>
                </div>
                <Button variant="fill" onClick={() => navigate('/matches/' + data.fixture.slug)}>
                    ПРОГНОЗ РЕДАКЦИИ
                </Button>
            </div>
            <div class={styles.outcomes}>
                <div class={styles.one}>
                    <Outcome fixtureId={fixtureId()} coefficient={data.outcomes[0].coefficient} name={data.outcomes[0].name} count={data.outcomes[0].count} wide />
                </div>
                <div class={styles.two}>
                    <Outcome fixtureId={fixtureId()} coefficient={data.outcomes[1].coefficient} name={data.outcomes[1].name} count={data.outcomes[1].count} />
                </div>
                <div class={styles.three}>
                    <Outcome fixtureId={fixtureId()} coefficient={data.outcomes[2].coefficient} name={data.outcomes[2].name} count={data.outcomes[2].count} />
                </div>
            </div>
        </div>
    )
}
