import React  from 'react';
import '../components/Main.css'
import title_img from '../images/title-img.avif'
import { Link } from 'react-router-dom';

function Header() {
  return(
  <div>
    <header>
    <main>
      <nav>
        <Link to="/" className="Home"><img src={title_img} alt=''></img> <h1>Farmer's Assistant</h1></Link>
      </nav>
      </main>
      
    </header>
  </div> 
  );
}

export default Header;
