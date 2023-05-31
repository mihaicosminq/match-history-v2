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
            <div className="searchBar">
                <img
                    width="800"
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
            <div className="note">

                <img src="https://64.media.tumblr.com/4fe388ab94b4754821b640e48542b4a8/be8df600aa8054fc-f6/s400x600/92e7857d234d523247b20d919303a615976397df.png" height="100"/>

                <div className="noteTitle">
                    <h2>Note</h2>
                    <p>If you don't have a summoner name try <span style={{color:"#665889"}}>Gracie Abrams</span></p>
                </div>
            </div>
        </>
    )

}

export default Home;