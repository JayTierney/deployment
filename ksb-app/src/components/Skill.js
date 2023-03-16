import React from 'react';

import { skillsStandards } from '../assets/standards';
import StandardsCard from './StandardsCard';

const Skill = () => {
    return(
        <div classname="App">
            <h1>Skill</h1>
            {
                skillsStandards.map((x) => {
                    return <StandardsCard standard={x.standard} />
                })
            }
        </div>
    )
}



export default Skill