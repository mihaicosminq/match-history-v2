import SummonerProfile
    from "./SummonerProfile";
import {
    useEffect,
    useState
}   from "react";
import "./Summoner.css"

import SummonerRank
                  from "./SummonerRank";
import MatchCard  from "./matchCard";
import FlexFilter from "./FlexFilter";
import SoloFilter from "./SoloFilter";
import {
    useSearchParams
}                 from "react-router-dom";
import axios      from "axios";
import Spinner
                  from "react-bootstrap/Spinner";
import debounce
                  from "lodash.debounce";

function Summoner() {

    const [playerObj, setPlayerObj] = useState({});
    const [puuid, setPuuid] = useState();
    const [matchHistory, setMatchHistory] = useState([]);
    const [playerObjReady, setplayerObjReady] = useState(false);
    const [summonerSpells, setSummonerSpells] = useState({});
    const [runes, setRunes] = useState({});
    const [playerRank, setPlayerRank] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchChamp, setSearchChamp] = useState('');
    const [matchContainer, setMatchContainer] = useState(false);
    const [active, setIsActive] = useState("all");
    const [soloLoading, setSoloLoading] = useState(false);
    const [flexLoading, setFlexLoading] = useState(false);
    const searchText = searchParams.get("name");

    async function getPlayerGamesAsync() {
        try {
            const response = await axios.get("http://localhost:4000/past10Games", {params: {username: searchText}})
            setMatchHistory(response.data.matchDataArray)
            setPlayerObj(response.data.matchDataArray[0].info.participants.find(participant => participant.puuid === response.data.puuid))
            setPuuid(response.data.puuid)
            setplayerObjReady(true)
            setPlayerRank(response.data.summoner)
        } catch (e) {
            console.log(e)
        }
    }


    const matchContainerHandler = () => {
        setMatchContainer(true);
    }


    const updateSearch = e => {
        setSearchChamp(e?.target?.value)
        e.preventDefault();
    };

    const debounceSearch = debounce(updateSearch, 1000)

    const soloWrapper = () => {
        setIsActive("solo");
        setSoloLoading(true)
        setTimeout(() => {
            setSoloLoading(false)
        }, 3000);
    }
    const flexWrapper = () => {
        setIsActive("flex");
        setFlexLoading(true);
        setTimeout(() => {
            setFlexLoading(false);
        }, 3000)
    }


    useEffect(() => {
        axios.get('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/summoner.json')
            .then(function (res) {
                setSummonerSpells(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get("https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/runesReforged.json")
            .then(function (res) {
                setRunes(res.data)
            })
    }, [])

    useEffect(() => {
        getPlayerGamesAsync()
    }, [])


    function getPlayerObj(match) {
        return match.info.participants.find(participant => participant.puuid === puuid)
    }

    return (
        <>
            {playerObjReady &&
                <SummonerProfile
                    playerObj={playerObj}/>}
            <div className="summonerWrap">
                {playerObjReady &&
                    <div
                        className="container1">
                        <div
                            className="rank">
                            <SummonerRank
                                rank={playerRank}/>
                        </div>
                    </div>
                }
                {playerObjReady ?
                    <div className="matchContainer">
                    <div
                        className="listaButoane">
                        <ul className="queueSelect">
                            <li>
                                <button
                                    onClick={() => {
                                        setIsActive("all")
                                    }
                                    }
                                    className="listButton">All
                                </button>
                            </li>

                            {soloLoading ? "" :
                                (
                                    <li>
                                        <button
                                            onClick={() => {
                                                soloWrapper();
                                            }}
                                            className="listButton">Solo
                                        </button>
                                    </li>
                                )
                            }
                            {
                                soloLoading ?
                                    <Spinner
                                        animation="border"/>
                                    :
                                    ""
                            }
                            {flexLoading ? "" :
                                (
                                    <li>
                                        <button
                                            onClick={() => {
                                                flexWrapper()
                                            }}
                                            className="listButton">Flex
                                        </button>
                                    </li>)}
                            {flexLoading ?
                                <Spinner
                                    animation="border"/>
                                :
                                ""
                            }
                        </ul>
                        <div
                            className="listBar"
                            style={{
                                paddingRight: 5,
                                color: "white"
                            }}>
                            <input
                                className="listInput"
                                type="text"
                                onChange={debounceSearch}
                                placeholder="Search.."/>

                        </div>
                    </div>


                    {active === "all" &&
                        <div
                            className="match">
                            {playerObjReady && runes && playerObj && matchHistory.filter(match => {
                                const participant = getPlayerObj(match)
                                return searchChamp === '' ? true : participant.championName.toLowerCase().includes(searchChamp)
                            }).map((match, matchIndex) => {
                                const participant = getPlayerObj(match)
                                return (
                                    <div>
                                        <div
                                            className="meci"
                                            key={matchIndex}
                                            style={{"background": `${participant.win === true ? "linear-gradient(90deg, rgba(97, 152, 164, 0.5) 0%, rgba(49, 41, 85, 0.5) 100%)" : "linear-gradient(90deg, rgba(201, 103, 143, 0.5) 0%, rgba(49, 41, 85, 0.5) 100%)"}`}}>
                                            <MatchCard
                                                playerObj={getPlayerObj(match)}
                                                match={match}
                                                runes={runes}
                                                spells={summonerSpells}/>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </div>
                    }
                    {active === "flex" &&
                        <FlexFilter
                            searchText={searchText}
                            runes={runes}
                            spells={summonerSpells}
                            playerObj={playerObj}/>}
                    {active === "solo" &&
                        <SoloFilter
                            searchText={searchText}
                            runes={runes}
                            spells={summonerSpells}
                            playerObj={playerObj}/>
                    }
                </div>
                   : <Spinner animation="border"/>
                }
            </div>
        </>
    )
}

export default Summoner;