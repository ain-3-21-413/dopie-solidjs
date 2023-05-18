import { createContext, on } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPredictionContext = createContext();

export default function CurrentPredictionProvider(props) {

    const [state, setState] = createStore({
        fixture: {
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
            name: "ТБ (10)",
            coefficient: "2.48",
        },
        text: "",
    });

    const currentPredictionValue = [
        state, 
        {
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
        }
    ]

    return (
        <CurrentPredictionContext.Provider value={currentPredictionValue}>
            {props.children}
        </CurrentPredictionContext.Provider>
    )
}