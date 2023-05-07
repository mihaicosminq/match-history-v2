import {useState} from "react";
import "./Champions.css"
import ChampionDetails
                  from "./ChampionDetails";
import {
    createSearchParams,
    useNavigate
}                 from "react-router-dom";

function MageFilter({
                        champions,
                        role,
                        updateSearch
                    }) {
    const [championDetails, setChampionDetails] = useState(null);
    const [champDiv, setChampDiv] = useState(true);
    const navigate = useNavigate();





    const getChampionDetail = (championDetails) => {
        setChampionDetails(championDetails)
    }


    const wrapperFunction = (item) => {
        getChampionDetail(item);
        setChampDiv(false)
    }


    let filteredChampions = champions.filter(item => item.tags[0] === role)


    return (
        <>
            <div
                className="championsGrid">
                {champDiv &&
                    filteredChampions.filter(match => {
                        return updateSearch === '' ? true : match.name.toLowerCase().includes(updateSearch)
                    }).map((item) => {
                        return (
                            <>
                                <div
                                    key={item.id}
                                    className="championWrapper">
                                <span
                                    onClick={() => wrapperFunction(item)}
                                    onClick={() => {
                                        navigate({
                                            pathname: "details",
                                            search: `?${createSearchParams({
                                                name:item.id
                                            })}`
                                        });
                                    }
                                    }
                                    style={{cursor: "pointer"}}
                                    className="imageSpan">
                                <img
                                    className="championImage"
                                    src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + item.id + "_0.jpg"}/>
                                </span>
                                    <span
                                        className="championName">
                                  <span
                                      className="customText"
                                      onClick={() => wrapperFunction(item)}
                                      onClick={() => {
                                          navigate({
                                              pathname: "details",
                                              search: `?${createSearchParams({
                                                  name:item.id
                                              })}`
                                          });
                                      }
                                      }
                                      style={{cursor: "pointer"}}
                                  >{item.name}</span>
                                </span>
                                </div>
                            </>
                        )
                    })}
            </div>
            {championDetails &&
                <ChampionDetails {...championDetails} />}
        </>
    )
}


export default MageFilter;