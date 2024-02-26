import React from 'react'
import '../components/Main.css'
import { Link } from 'react-router-dom'
export default function Main() {
   
    return(
        <div className='main-container'>     
            <div className='containers' >  
                <Link to="/croplist"><div className='container1'  >Crop List</div></Link>
                <Link to="/fertilizers"><div className='container2' >Fertilizers</div></Link>
                <Link to="/diseases"><div className='container3' >Diseases</div></Link>
                <Link to="/pesticides"><div className='container4' >Pesticides</div></Link>
            </div>
        </div>
    
    )
}