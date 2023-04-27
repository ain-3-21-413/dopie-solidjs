import { Route, Routes } from "@solidjs/router";
import Home from "../pages/Home/Home";
import Matches from "../pages/Matches/Matches";
import Predictions from "../pages/Predictions/Predictions";

export default function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/matches' element={<Matches />} />
            <Route path='/predictions' element={<Predictions />} />
        </Routes>
    )
}