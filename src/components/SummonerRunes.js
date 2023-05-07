import {useState} from "react";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'


function SummonerRunes({
                           playerObj,
                           rune
                       }) {


    const primaryRune = playerObj && Object.values(rune).find(rune => {
        return rune.id === playerObj.perks.styles[0].style
    })
    const primaryRunev2 = primaryRune && Object.values(primaryRune.slots[0].runes).find(mainRune => {
        return mainRune.id === playerObj.perks.styles[0].selections[0].perk
    })
    const summoner = primaryRunev2 &&
        <img width="25" src={"https://ddragon.leagueoflegends.com/cdn/img/" + primaryRunev2.icon}/>

    const styleId = playerObj && playerObj.perks.styles[1].style

    const icon = rune && rune.find(rune => {
        return rune.id === styleId
    })
    const secondarySpell = icon && <img
        width="20"
        src={"https://ddragon.leagueoflegends.com/cdn/img/" + icon.icon}/>
    const runeName = primaryRunev2.name
    const secondRuneName = icon.name
    return (
        <>
            <div>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={runeName}>
                    {summoner}
                </a>
            </div>
            <Tooltip id="my-tooltip"/>

            <div>
                <a data-tooltip-id="my-tooltipv2" data-tooltip-content={secondRuneName}>
                    {secondarySpell}
                </a>
            </div>
            <Tooltip id="my-tooltipv2"/>


        </>
    )

}


export default SummonerRunes