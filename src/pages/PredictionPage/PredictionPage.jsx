import { useNavigate } from "@solidjs/router";
import styles from "./PredictionPage.module.css";
import { For } from "solid-js";

const data = {
    fixture: {
        home: "Питтсбург",
        away: "Колорадо",
        date: "10 мая 2023",
        time: "22:35",
        slug: "10-05-2023-pittsburg-colorado",
    },
    predictor: {
        name: "BETMAKS NHL",
        slug: "betmaks-nhl",
        wins: 47,
        returns: 5,
        loses: 38,
    },
    prediction: {
        date: "10 мая",
        time: "18:11",
        text: [
            "Аналитика:",
            "Рассмотрим сегодня встречу Национальной лиги, где Питтсбург будет принимать у себя дома Колорадо в третьем матче серии. Питтсбург идет на 3 строчке, в то время как Колорадо проваливает сезон, находясь на 14 месте. В этом году оборона и питчеры в старте очень плохо отыгрывают, тем самым команда очень много пропускает. С самого начала я хотел вновь зайти на Аризону или рассмотреть победу Янкис, достаточно уверенные варианты, но что-то меня оттолкнуло, просто решил с вами поделится, вдруг кто думал над этими вариантами.",
            "Питчеры:",
            "В старте у Питтсбурга встанет ветеран Rich Hill, 43 летний леворукий питчер. На данный момент его показатели 4.54 ERA и 1.46 WHIP. Сыграл 37 иннинга, пропустил 44 хита, 19 ранов, 8 хоум ранов. Опытный питчер, но последние года статистика не самая лучшая, поэтому надеется на него в этой встрече точно не стоит. Что касаемо питчера, который выйдет у Колорадо, то тут должен выйти Antonio Sensantela, сыгравший 677 иннинга в МЛБ и в этом сезоне он провел всего 5 иннингов и его статистика 1.80 ERA и 0.800 WHIP, каких то выводов сделать будет тяжело, так как он сыграл всего один матч, если судить по последним годам, то он достаточно посредственный питчер.",
            "Статистика команд:",
            "По статистики, конечно Колорадо уступает по многим показателям, но не во всех. Например у команды более высокий показатель AVG биты и по игре это видно, также Колорадо хуже отыгрывает в обороне 20+ места по показателям обороны, в то время как Питтсбург 15-20.",
            "📌 Наш прогноз по кнопке",
            "Питтсбург идет на ужасной серии, за 9 матчей, команда смогла добыть только одну победу и в каждом матче команда не смогла сделать более двух ранов. После хорошего старта, команда пошла на спад и как долго это еще продлится, пока не ясно. В прошлом матче Колорадо по делу обыграли их со счетом 1-10, Питтсбург вновь показал ужасную реализацию. Как раз вчера мы заходили на этот матч вместе с клиентами и поймали обидное поражение. Сегодня как на зло, Питтсбург свой тотал пробьет, но я воздержусь от данного варианта, а лучше рассмотрю тотал Колорадо. Больно мне нравится их бита и их игра. Хоть по статистике команда не внушает доверие, но по игре так не скажешь. Сегодня на горке у Питтсбург будет стоять пенсионер, который уже давно не блещет результатами, я думаю Колорадо воспользуется этим шансом и попробует забрать эту серию, тем более Питтсбург сейчас на серьезном спаде, поэтому лично для меня атака Колорадо выглядит тут по симпатичнее. Будем пробовать, а там игра покажет.",
        ],
        outcome: {
            name: "ИТ2Б (3.5)",
            coefficent: "1.81",
            sum: "10 000",
            possibleWin: "+8 100",
        }
    },
    otherPredictions: [
        {
            date: "10 мая",
            time: "22:35",
            home: "Питтсбург",
            away: "Колорадо",
            slug: "10-05-2023-pittsburg-colorado-betmaks-nhl",
            coefficent: "1.90",
        },
        {
            date: "10 мая",
            time: "22:35",
            home: "Питтсбург",
            away: "Колорадо",
            slug: "10-05-2023-pittsburg-colorado-betmaks-nhl",
            coefficent: "1.90",
        },
        {
            date: "10 мая",
            time: "22:35",
            home: "Питтсбург",
            away: "Колорадо",
            slug: "10-05-2023-pittsburg-colorado-betmaks-nhl",
            coefficent: "1.90",
        },
        {
            date: "10 мая",
            time: "22:35",
            home: "Питтсбург",
            away: "Колорадо",
            slug: "10-05-2023-pittsburg-colorado-betmaks-nhl",
            coefficent: "1.90",
        },
        {
            date: "10 мая",
            time: "22:35",
            home: "Питтсбург",
            away: "Колорадо",
            slug: "10-05-2023-pittsburg-colorado-betmaks-nhl",
            coefficent: "1.90",
        },
    ],

}

export default function PredictionPage() {

    const navigate = useNavigate();

    return (
        <div>
            <div class={styles.fixture}>
                <div class={styles.info}>
                    <span>
                        {data.prediction.date}
                    </span>
                    <span>
                        в
                    </span>
                    <span>
                        {data.prediction.time}
                    </span>
                </div>
                <div class={styles.main}>
                    <div class={styles.teams} onClick={() => navigate("/matches/" + data.fixture.slug)}>
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
                    <div>
                        <span>
                            {data.fixture.date},
                        </span>
                        <span>
                            {data.fixture.time}.
                        </span>
                    </div>
                    <div>
                        <span>
                            Прогноз от 
                            <span>
                                {data.predictor.name}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div class={styles.predictor}>
                <a class={styles.predictorName} onClick={() => navigate("/predictors/" + data.predictor.slug)}>
                    {data.predictor.name}
                </a>
                <div class={styles.stats}>
                    <span class={styles.wins}>+ <span> {data.predictor.wins} </span> </span>
                    <span class={styles.returns}>= <span> {data.predictor.returns} </span> </span>
                    <span class={styles.loses}>- <span> {data.predictor.loses} </span> </span>
                </div>
            </div>
            <div class={styles.prediction}>
                <h3>
                    Обоснование прогноза
                </h3>
                <div class={styles.text}>
                <For each={data.prediction.text}>{(p) =>
                    <p>
                        {p}
                    </p>
                }</For>
                </div>

            </div>
            <div class={styles.outcome}>
                <div class={styles.badge}>
                    Прогноз
                </div>
                <div class={styles.top}>
                    <span class={styles.name}>
                        {data.prediction.outcome.name}
                    </span>
                    <span style={{opacity: ".7"}}>
                        с кэфом:
                    </span>
                    <span class={styles.coefficient}>
                        {data.prediction.outcome.coefficent}
                    </span>
                </div>
                <div class={styles.center}>
                    <span class={styles.sum}>
                        Сумма
                        {data.prediction.outcome.sum}
                    </span>
                    <span class={styles.possibleWin}>
                        Возможный выигрыш:
                        {data.prediction.outcome.possibleWin}
                    </span>
                </div>
                <button>
                    Повторить прогноз
                </button>
            </div>
        </div>
    )
}
