import MatchCard from "./matchCard";
import "./matchCard.css"
import axios     from "axios";
import {
    useEffect,
    useState
}                from "react";
import "../App.css"


function SoloFilter({
                        searchText,
                        playerObj,
                        spells,
                        runes
                    }) {
    const [soloGames, setsoloGames] = useState({});
    const [puuid, setPuuid] = useState();

    async function getsoloGames(event) {
        try {
            const response = await axios.get("http://sore-rose-meerkat-suit.cyclic.app/past10Games", {params: {username: searchText}})
            setsoloGames(response.data.solo)
            setPuuid(response.data.puuid)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getsoloGames();
    }, [])


    function getPlayerObj(match) {
        return match.info.participants.find(participant => participant.puuid === puuid)
    }


    return (
        <div className="App">
            <div
                className="matchContainer">
                {soloGames && Object.values(soloGames).map((match, matchIndex) => {
                    const participant = getPlayerObj(match)

                    return (<div
                        key={matchIndex}
                        className="meci"
                        style={{"background": `${participant.win === true ? "linear-gradient(90deg, rgba(97, 152, 164, 0.5) 0%, rgba(49, 41, 85, 0.5) 100%)" : "linear-gradient(90deg, rgba(201, 103, 143, 0.5) 0%, rgba(49, 41, 85, 0.5) 100%)"}`}}>
                        <MatchCard
                            match={match}
                            spells={spells}
                            playerObj={getPlayerObj(match)}
                            runes={runes}/>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default SoloFilter;


