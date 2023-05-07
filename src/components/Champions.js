import {
    useEffect,
    useState
} from "react";
import axios from "axios";
import "./Champions.css"
import ChampionDetails
    from "./ChampionDetails";
import championDetails
    from "./ChampionDetails";
import debounce
    from "lodash.debounce";
import MageFilter
    from "./MageFilter";
import {
    createSearchParams,
    useNavigate
}   from "react-router-dom";

function Champions() {
    const [champs, setChamps] = useState({});
    const [championDetails, setChampionDetails] = useState(null);
    const [champDiv, setChampDiv] = useState(true)
    const [searchChamp, setSearchChamp] = useState("");
    const [objectReady, setObjectReady] = useState(true);
    const [roleFilter, setRoleFilter] = useState("");
    const [showInput, setShowInput] = useState();
    const navigate = useNavigate();


    async function getChamps() {
        try {
            const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json")
            setChamps(response.data.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getChampionDetail = (championDetails) => {
        setChampionDetails(championDetails)
    }


    const wrapperFunction = (item) => {
        getChampionDetail(item);
        setChampDiv(false);

    }


    useEffect(() => {
        getChamps();
    }, [])

    const champsSorted = Object.values(champs).sort(function (a, b) {
        return b.id - a.id

    })
    const updateSearch = e => {
        setSearchChamp(e?.target?.value)
        e.preventDefault();
    };

    const assassinWrapper = () => {
        setRoleFilter("Assassin")
        setChampDiv(false)
    }
    const mageWrapper = () => {
        setRoleFilter("Mage")
        setChampDiv(false)
    }
    const fighterWrapper = () => {
        setRoleFilter("Fighter")
        setChampDiv(false)
    }
    const allyWrapper = () => {
        setRoleFilter(null)
        setChampDiv(true)
        setChampionDetails(false);
    }
    const adcWrapper = () => {
        setRoleFilter("Marksman")
        setChampDiv(false)
    }
    const supportWrapper = () => {
        setRoleFilter("Support")
        setChampDiv(false)
    }
    const tankWrapper = () => {
        setRoleFilter("Tank")
        setChampDiv(false)
    }

    const debounceSearch = debounce(updateSearch, 1000)


    return (
        <>
            <h1>Champions</h1>
            <div className="navWrap">
                <nav
                    className="championNav">
                    <div className="listDiv">
                        <ul className="roleFilterList">
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => allyWrapper()}>
                                    All
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => assassinWrapper()}>
                                    Assassin
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => mageWrapper()}>
                                    Mage
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => fighterWrapper()}>
                                    Fighter
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => adcWrapper()}>
                                    Marksmen
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => supportWrapper()}>
                                    Support
                                </button>
                            </li>
                            <li>
                                <button
                                    className="roleFilterButton"
                                    onClick={() => tankWrapper()}>
                                    Tank
                                </button>
                            </li>
                            <li>
                                {showInput ?
                                    <div style={{border: "none"}}>
                                        <input
                                            type="text"
                                            className="searchChamp"
                                            placeholder="Search Champions"
                                            onChange={debounceSearch}/>
                                    </div>
                                    : null}
                            </li>
                            <li>
                                <button style={{background: "transparent", border: "none"}}
                                        onClick={() => setShowInput(!showInput)}>
                                    <img
                                        style={{backgroundColor: "#261a3a", height: "30px", width: "30px"}}
                                        src={"https://i.imgur.com/ZvKFcTX.png"}/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="championsGrid">
                {champDiv && objectReady &&
                    champsSorted.filter(match => {
                        return searchChamp === '' ? true : match.name.toLowerCase().includes(searchChamp)
                    }).map((item) => {
                        return (
                            <>
                                <div
                                    key={item.title}
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
                                      style={{cursor: "pointer"}}
                                  >{item.name}</span>
                                </span>
                                </div>

                            </>
                        )
                    })
                }
            </div>
            {championDetails &&
                <ChampionDetails {...championDetails} />}
            <MageFilter
                updateSearch={searchChamp}
                champions={champsSorted}
                role={roleFilter}/>
        </>
    )
}


export default Champions;