
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'


function SummonerSpells({
                            playerObj,
                            spells
                        }) {

    const spell = spells && playerObj && Object.values(spells).find(spell => {
        return spell.key == playerObj.summoner1Id
    })

    const spellImage = spell &&
        <img width="25"
             src={"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/" + spell.image.full}/>

    const secondSpell = spells && playerObj && Object.values(spells).find(spell => {
        return spell.key == playerObj.summoner2Id
    })


    const secondSpellImage = spell &&
        <img width="25"
             src={"https://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/" + secondSpell.image.full}/>

    const toolTipFirstSummoner = spell.name
    const toolTipSecondSummoner = secondSpell.name

    return (
        <>
            <div>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={toolTipFirstSummoner}>
                    {spellImage}
                </a>
            </div>
            <Tooltip id="my-tooltip"/>
            <div>
                <a data-tooltip-id="my-tooltip2" data-tooltip-content={toolTipSecondSummoner}>
                    {secondSpellImage}
                </a>
            </div>
            <Tooltip id="my-tooltip2"/>
        </>
    )

}

export default SummonerSpells;