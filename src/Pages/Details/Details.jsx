import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import useProject from '../../Hooks/useProject';

const Details = () => {
    const {id} = useParams()
    const [projects,setProject] = useProject()
    console.log(projects)
    const details = projects.find(pro => pro.id === id)
    console.log(details)
    return (
        <div>
            
        </div>
    );
};

export default Details;