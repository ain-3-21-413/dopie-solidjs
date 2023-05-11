import { Route, Routes } from "@solidjs/router";
import Home from "../pages/Home/Home";
import Matches from "../pages/Matches/Matches";
import Predictions from "../pages/Predictions/Predictions";
import DPMatchPage from "../pages/DPMatchPage/DPMatchPage";
import PredictionPage from "../pages/PredictionPage/PredictionPage";

export default function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/matches'>
                <Route path='' element={<Matches />} />
                <Route path=':slug' element={<DPMatchPage />} />
            </Route>
            <Route path='/predictions'>
                <Route path='' element={<Predictions />} />
                <Route path=":slug" element={<PredictionPage />} />
            </Route>
        </Routes>
    )
}