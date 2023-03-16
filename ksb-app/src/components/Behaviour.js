import React from 'react';

import { behaviourStandards } from '../assets/standards';
import StandardsCard from './StandardsCard';

const Behaviour = () => {
    return(
        <div classname="App">
        <h1>Behaviour</h1>
        {
            behaviourStandards.map((x) => {
                return <StandardsCard standard={x.standard} />
            })
        }
        </div>
    )
}

export default Behaviour