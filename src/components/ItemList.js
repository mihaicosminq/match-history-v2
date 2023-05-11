import "./ItemList.css"


function ItemList({playerObj}) {

    const imageError = e => {
        e.target.src = "https://static.wikia.nocookie.net/leagueoflegends/images/9/95/ChampionSquare.png"
    }

    return (
        <>
            {playerObj &&
                <ul className="listItems" style={{paddingTop:5}}>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item0 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item1 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item2 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item3 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item4 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item5 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             onError={imageError}
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item6 + ".png"}/>
                    </li>
                </ul>}
        </>
    )

}


export default ItemList;