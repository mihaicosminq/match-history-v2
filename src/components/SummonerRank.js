import "./SummonerRank.css"

function SummonerRank({rank}) {
    console.log(rank)
    return (<>
        {rank?.map((rank, index) => {
            const games = rank.wins + rank.losses
            return (
                <>
                    <div key={index + 1}
                         className="rankcontainer">
                        <div key={index + 2}>
                            <img
                                width="100"
                                src={"https://opgg-static.akamaized.net/images/medals_new/" + rank.tier.toLowerCase() + ".png"}/>
                        </div>
                        <div
                            key={index + 3}
                            className="rankInfo">
                            <div
                                className="queue"> {rank.queueType} </div>
                            <div key={index + 4}>
                                <span
                                    style={{fontSize: 20}}>{rank.tier} {rank.rank}</span>
                                <span className="dot">·</span>
                                <span  style={{fontSize: 20,color:"#665889"}}>{rank.leaguePoints} LP</span>
                            </div>
                            <div key={index} className="winratio">
                                <span>W:{rank.wins} </span>
                                <span>L:{rank.losses} </span>
                                <span className="dot">·</span>
                                <span>WR:{Math.floor(rank.wins / games * 100) + "%"}</span>
                            </div>
                        </div>

                    </div>
                </>)
        })}
    </>)
}


export default SummonerRank