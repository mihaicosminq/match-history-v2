
import "./SummonerProfile.css"


function SummonerProfile({playerObj}) {



    return (
        <>
            <div className="containerprofile">
            <div className="summoner">
        <div className="profileimage">
            <img width="100" style={{borderRadius:5}}
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