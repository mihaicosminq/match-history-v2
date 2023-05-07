import './App.css';
import Summoner
    from "./components/Summoner";

import Footer
    from "./components/Footer";
import ChallengerLeaderboard
    from "./components/ChallengerLeaderboard";
import Champions
    from "./components/Champions";
import {
    Route, Routes , HashRouter
}   from "react-router-dom";
import Home
    from "./components/Home";
import ChampionDetails
    from "./components/ChampionDetails";
import Navbar
    from "./components/Navbar";


function App() {

    return (
        <>
            <div className="App">
                <HashRouter>
                <Routes>
                    <Route path="/"
                           element={
                               <Navbar/>}>

                        <Route
                            path="/champions"
                            element={
                                <Champions/>}/>

                        <Route path="/"
                               element={
                                   <Home/>}/>

                        <Route
                            path="/challenger"
                            element={
                                <ChallengerLeaderboard/>}/>

                        <Route
                            path="/champions/details"
                            element={
                                <ChampionDetails/>}/>

                        <Route
                            path='summoner'
                            element={
                                <Summoner/>}/>

                    </Route>
                </Routes>
                </HashRouter>
                <Footer/>
            </div>

        </>
    )
}

export default App;
