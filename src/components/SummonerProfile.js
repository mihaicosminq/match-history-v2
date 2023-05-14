
import "./SummonerProfile.css"


function SummonerProfile({playerObj}) {

    const imageError = e => {
        e.target.src = "https://static.wikia.nocookie.net/leagueoflegends/images/9/95/ChampionSquare.png"
    }



    return (
        <>
            <div className="containerprofile">
            <div className="summoner">
        <div className="profileimage">
            <img width="100" style={{borderRadius:5}}
                 onError={imageError}
                 src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/" + playerObj.profileIcon + ".png"}/>
            <div className="level">
            <span className="levelstyle">{playerObj.summonerLevel}</span>
            </div>
        </div>
            </div>
                <div className="name">
                    <h1 style={{margin:5}}>{playerObj.summonerName}</h1>
                </div>
            </div>

        </>


    )
}


export default SummonerProfile