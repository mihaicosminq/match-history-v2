import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import ChallengerLeaderboard from "../components/ChallengerLeaderboard";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview
                path="/ChallengerLeaderboard">
                <ChallengerLeaderboard/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews