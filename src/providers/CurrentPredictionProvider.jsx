import { createContext, on } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPredictionContext = createContext();

export default function CurrentPredictionProvider(props) {

    const [state, setState] = createStore({
        fixture: {
            id: "", 
            dateTime: {
                date: "19 мая",
                time: "05:45",
            },
            teams: {
                home: {
                    name: "Сент-Луис Кардиналс",
                },
                away: {
                    name: "Лос Анджелес Доджерс",
                }
            },
        },
        outcome: {
            name: "",
            coefficient: "2.48",
        },
        text: "",
    });

    const currentPredictionValue = [
        state, 
        {
            setFixtureId(fixtureId) {
                setState("fixture", "id", fixtureId);
            }, 
            setDate(date) {
                setState("fixture", "dateTime", "date", date);
            },
            setTime(time) {
                setState("fixture", "dateTime", "time", time);
            },
            setHome(home) {
                setState("fixture", "teams", "home", "name", home);
            }, 
            setAway(away) {
                setState("fixture", "teams", "away", "name", away);
            }, 
            setOutcomeName(outcomeName) {
                setState("outcome", "name", outcomeName);
            }, 
            setOutcomeCoefficient(outcomeCoefficient) {
                setState("outcome", "coefficient", outcomeCoefficient);
            }, 
            setText(text) {
                setState("text", text);
            }, 
            clear() {
                setState("fixture", "id", "");
                setState("fixture", "dateTime", "date", "");
                setState("fixture", "dateTime", "time", ""); 
                setState("fixture", "teams", "home", "name", "");
                setState("fixture", "teams", "away", "name", "");
                setState("outcome", "name", "");
                setState("outcome", "coefficient", "");
                setState("text", "");
            }
        }
    ]

    return (
        <CurrentPredictionContext.Provider value={currentPredictionValue}>
            {props.children}
        </CurrentPredictionContext.Provider>
    )
}