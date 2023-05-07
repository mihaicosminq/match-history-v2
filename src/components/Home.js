import searchImage
    from "../bettersg.png";

import {
    createSearchParams,
    useNavigate, useSearchParams
} from "react-router-dom";
import {useState} from "react";
import "./Home.css"


function Home() {

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    return (
        <>
            <div
                className="searchBar">
                <img
                    width="1000"
                    style={{marginRight: 150}}
                    src={searchImage}/>
                <div
                    className="buttonbar">
                    <input
                        className="summonerBar"
                        type="text"
                        placeholder="Summoner name"
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        className="button"
                        onClick={() => {
                            navigate({
                                pathname: "summoner",
                                search: `?${createSearchParams({
                                   name:searchText && searchText
                                })}`
                            });
                        }}
                    >Search
                    </button>
                </div>
            </div>
        </>
    )

}

export default Home;