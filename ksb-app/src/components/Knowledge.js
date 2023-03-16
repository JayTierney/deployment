import React from 'react';

import { knowledgeStandards } from '../assets/standards';
import StandardsCard from './StandardsCard'

const Knowledge = () => {
    return(
        <div classname="App">
        <h1>Knowledge</h1>
        {
            knowledgeStandards.map((x) => {
                return <StandardsCard standard={x.standard}/>              
            })
        }
        </div>
    )
}

export default Knowledge