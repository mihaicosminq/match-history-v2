import "./matchCard.css"
import SummonerSpells
    from "./SummonerSpells";
import SummonerRunes
    from "./SummonerRunes";
import ItemList from "./ItemList";
import QueueType from "./queueType";
import {useState} from "react";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'


function MatchCard({
                       playerObj,
                       match,
                       runes,
                       spells
                   }) {

    const [showCard, setShowCard] = useState(false)
    const win = playerObj && playerObj.win;
    const minutes = Math.floor(match.info.gameDuration / 60);
    const seconds = match.info.gameDuration % 60;
    const kda = playerObj && Math.floor((playerObj.kills + playerObj.assists) / playerObj.deaths)


    return <>

        <div className="wrapper">
            <div
                className="cardFlex">
                <div
                    className="info">
                    <QueueType
                        playerObj={playerObj}
                        match={match}/>
                    <div>
                        <span>{minutes}m {seconds}s</span>
                    </div>
                    <div
                        className="matchOutcome"
                        style={{"color": `${win === true ? 'blue' : 'red'}`}}>
                        {win === true ?
                            <span> WIN </span> :
                            <span> LOSS </span>}
                    </div>
                </div>
                <div
                    style={{display: "flex"}}>
                    <div className="playerinfo">
                        <img
                            data-tooltip-id="my-tooltipv2" data-tooltip-content=
                            {playerObj.championName}
                            height="51px"
                            src={"https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" + playerObj.championName + ".png"}
                            />
                        <Tooltip id="my-tooltipv2"/>
                        <div
                            className="spells">
                            <SummonerSpells
                                playerObj={playerObj}
                                spells={spells}/>
                        </div>
                        <div
                            className="runes">
                            <SummonerRunes
                                playerObj={playerObj}
                                rune={runes}/>
                        </div>
                    </div>
                    <div
                        className="stats">
                        <div
                            style={{fontSize: 17}}>
                                <span
                                    style={{color: "white"}}>{playerObj.kills} /</span>
                            <span
                                style={{color: "darkred"}}> {playerObj.deaths}</span>
                            <span
                                style={{color: "white"}}> / {playerObj.assists}</span>
                        </div>
                        <div>
                                <span
                                    style={{color: "grey"}}>{kda} KDA</span>
                        </div>
                        <div>
                                <span
                                    style={{color: "white"}}>{playerObj.totalMinionsKilled} CS</span>
                        </div>
                    </div>
                    <div
                        className="items">
                        <ItemList
                            playerObj={playerObj}/>
                    </div>
                </div>
                <div style={{
                    width: 285,
                    paddingTop: 15,
                    paddingRight: 20
                }}>
                    <ul className="lista">
                        {Object.values(match.info.participants).map((data, participantIndex) =>
                            <li className={data.teamId === 100 ? 'albastru' : 'rosu'}
                                key={participantIndex}>
                                <img
                                    data-tooltip-id="my-tooltip" data-tooltip-content=
                                    {data.championName}
                                    width="15"
                                    src={"https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" + data.championName + ".png"}/>
                                <Tooltip id="my-tooltip"/>
                                {data.summonerName}
                            </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="cardButton">
            <button
                className="buton"
                type="submit"
                onClick={() => setShowCard(!showCard)}>
                <img
                    src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1680060873716"
                    className="img"
                    width="24"
                    alt="More"
                    height="24"/>
            </button>
        </div>

        {showCard &&
            <>
                <div>
                    <table style={{
                        color: "white",
                        width: "100%",
                        paddingLeft: 10
                    }}>
                        <thead
                            className="tableHead">
                        <tr>
                            <td style={{"color": `${match.info.teams[0].win ? 'blue' : 'red'}`}}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <span>{match.info.teams[0].win ? "WIN " : "LOSS "}</span>
                                    <div>
                         <span>
                             <img src="https://s-lol-web.op.gg/images/icon/icon-baron.svg?v=1680243812781"/>
                             {match && match.info.teams[0].objectives.baron.kills}</span>
                                        <span>
                                <img src="https://s-lol-web.op.gg/images/icon/icon-dragon.svg?v=1680243812781"/>
                                            {match && match.info.teams[0].objectives.dragon.kills}</span>
                                        <span>
                                <img src="https://s-lol-web.op.gg/images/icon/icon-tower.svg?v=1680243812781"/>
                                            {match && match.info.teams[0].objectives.tower.kills}</span>
                                    </div>
                                </div>

                            </td>
                            <td>KDA</td>
                            <td>Damage</td>
                            <td>Wards</td>
                            <td>CS</td>
                            <td>Items</td>
                        </tr>
                        </thead>
                        <tbody
                            style={{textAlign: "center"}}>
                        {match && Object.values(match.info.participants).map((data, participantIndex) => {
                            return <>
                                {data && data.teamId === 100 ?
                                    <tr style={{
                                        "backgroundColor": `${data.win === true ? '#665889' : '#59343B'}`,
                                        borderTop: "2px solid #979797",
                                        borderBottom: "2px solid #979797"
                                    }}
                                        key={participantIndex}>
                                        <div
                                            style={{display: "flex"}}>
                                            <img
                                                width="45"
                                                src={"https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" + data.championName + ".png"}/>
                                            <div
                                                className="runes">
                                                <SummonerRunes
                                                    playerObj={data}
                                                    rune={runes}/>
                                            </div>
                                            <div
                                                className="spells">
                                                <SummonerSpells
                                                    playerObj={data}
                                                    spells={spells}/>
                                            </div>
                                            <span>{data.summonerName}</span>
                                        </div>
                                        <td>
                                            <span>{data.kills} / {data.deaths} / {data.assists}</span>
                                        </td>
                                        <td>
                                            <span>{data.totalDamageDealtToChampions}</span>
                                        </td>
                                        <td>
                                            <span>{data.wardsPlaced}</span>
                                        </td>
                                        <td>
                                            <span>{data.totalMinionsKilled}</span>
                                        </td>
                                        <td style={{paddingLeft:"30px"}}>
                                            <ItemList
                                                playerObj={data}/>
                                        </td>
                                    </tr>
                                    :
                                    ""
                                }
                            </>
                        })
                        }
                        </tbody>
                        <thead
                            className="tableHead">
                        <tr>
                            <td style={{"color": `${match.info.teams[1].win ? 'blue' : 'red'}`}}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <span>{match.info.teams[1].win ? "WIN " : "LOSS "}</span>
                                    <div>
                                        <span>
                                <img src="https://s-lol-web.op.gg/images/icon/icon-baron-r.svg?v=1680243812781"/>
                                            {match && match.info.teams[1].objectives.baron.kills}</span>
                                        <span>
                                <img src="https://s-lol-web.op.gg/images/icon/icon-dragon-r.svg?v=1680243812781"/>
                                            {match && match.info.teams[1].objectives.dragon.kills}</span>
                                        <span>
                                <img src="https://s-lol-web.op.gg/images/icon/icon-tower-r.svg?v=1680243812781"/>
                                            {match && match.info.teams[1].objectives.tower.kills}</span>


                                    </div>
                                </div>
                            </td>
                            <td>KDA</td>
                            <td>Damage</td>
                            <td>Wards</td>
                            <td>CS</td>
                            <td>Items</td>
                        </tr>
                        </thead>
                        <tbody
                            style={{textAlign: "center"}}>
                        {match && Object.values(match.info.participants).map((data, participantIndex) => {
                            return <>
                                {data && data.teamId === 200 ?
                                    <tr style={{
                                        "backgroundColor": `${data.win === true ? '#665889' : '#59343B'}`,
                                        borderTop: "2px solid #979797",
                                        borderBottom: "2px solid #979797"
                                    }}
                                        key={participantIndex}>
                                        <div
                                            style={{display: "flex"}}>
                                            <img
                                                width="45"
                                                src={"https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" + data.championName + ".png"}/>
                                            <div
                                                className="runes">
                                                <SummonerRunes
                                                    playerObj={data}
                                                    rune={runes}/>
                                            </div>
                                            <div
                                                className="spells">
                                                <SummonerSpells
                                                    playerObj={data}
                                                    spells={spells}/>
                                            </div>
                                            <span>{data.summonerName}</span>
                                        </div>
                                        <td>
                                            <span>{data.kills} / {data.deaths} / {data.assists}</span>
                                        </td>
                                        <td>
                                            <span>{data.totalDamageDealtToChampions}</span>
                                        </td>
                                        <td>
                                            <span>{data.wardsPlaced}</span>
                                        </td>
                                        <td>
                                            <span>{data.totalMinionsKilled}</span>
                                        </td>
                                        <td
                                            style={{paddingLeft:"30px"}}
                                        >
                                            <ItemList
                                                playerObj={data}/>
                                        </td>
                                    </tr>
                                    :
                                    ""
                                }
                            </>
                        })}
                        </tbody>
                    </table>
                </div>
            </>
        }

    </>
}

export default MatchCard;
