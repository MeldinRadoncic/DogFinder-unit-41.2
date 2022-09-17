import React from "react";
import {Link} from 'react-router-dom'
import './DogsList.css'



const DogsList = ({ img }) => {


    return(
        <div className="Dogs_List">
            <h1>DOG FINDER</h1>

            {img.map(i => (
                <div className="DogsList_box">
                
                <h2><Link exact to={`/dogs/${i.name.toLowerCase()}`}><img src={i.src} alt={i.name}/></Link></h2>
                </div>
                
            ))}

           
        </div>
    )

}


export default DogsList;