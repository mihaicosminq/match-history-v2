import {
    useState,
    useEffect
} from "react";
import axios from "axios";
import "./ChallengerLeaderboard.css"


function ChallengerLeaderboard() {
    const [summoners, setSummoners] = useState([]);
    const [summonersReady, setSummonersReady] = useState(false);

    async function getFlexGames() {
        try {
            const response = await axios.get("http://localhost:4000/past10Games")
            console.log(response)
            setSummoners(response.data.challengerSummoner)
            setSummonersReady(true)

        } catch (e) {
            console.log(e)
        }
    }

    const imageError = e => {
        e.target.src = "https://static.wikia.nocookie.net/leagueoflegends/images/9/95/ChampionSquare.png"
    }


    useEffect(() => {
        getFlexGames();
    }, [])

    return (
        <table className="leaderboard-table">
            <thead>
            <tr>
                <th>Summoner</th>
                <th>LP</th>
                <th>Level</th>
                <th>Winrate</th>
            </tr>
            </thead>
            <tbody>
            {summonersReady && summoners.map((summoner) => {
                let winPercentage = summonersReady && (summoner.wins / (summoner.wins + summoner.losses)) * 100
                let lossPercentage = summonersReady && (summoner.losses / (summoner.wins + summoner.losses)) * 100
                return (
                    <>

                        <tr>
                            <td>
                                <img width="75" style={{borderRadius: 5}}
                                     onError={imageError}
                                     src={"http://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/" + summoner.profileIcon + ".png"}/>
                                <span>{summoner.summonerName}</span>
                            </td>

                            <td>
                                <span>{summoner.leaguePoints}</span>
                            </td>

                            <td>
                                <span>{summoner.level}</span>
                            </td>
                            <td>
                                {summonersReady &&
                                    <div style={{float: "left"}}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{"width": winPercentage}}
                                                aria-valuenow={winPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100">
                                                {summoner.wins + "W"}
                                            </div>
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{width: lossPercentage}}
                                                aria-valuenow={lossPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100">
                                                {summoner.losses + "L"}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </td>
                        </tr>
                    </>
                )

            })}
            </tbody>

        </table>
    )
}


export default ChallengerLeaderboard;