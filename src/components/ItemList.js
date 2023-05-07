import "./ItemList.css"


function ItemList({playerObj}) {


    return (
        <>
            {playerObj &&
                <ul className="listItems" style={{paddingTop:5}}>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item0 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item1 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item2 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item3 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item4 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item5 + ".png"}/>
                    </li>
                    <li>
                        <img width="25"
                             src={"https://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/" + playerObj.item6 + ".png"}/>
                    </li>
                </ul>}
        </>
    )

}


export default ItemList;