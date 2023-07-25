import React, { useState } from "react";
import "./Navbar.css";
import img from "../../assets/textures/m-high-resolution-logo-color-on-transparent-background.png";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'


const Navbar = () => {
  const [state, setstate] = useState(false)

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={img} alt="logo" style={{ width: "100px" }} />
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us </a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
        </ul>

      <div className="app__navber-login">
        <a href="#login" className='p_opensans'> Log In/Register </a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      
      <div className="app__navbar-small">
          <GiHamburgerMenu color='#fff' fontSize={27} className='overlay__close' onClick={()=>{ setstate(true) }}/>
      {state &&(
        <div className="app__navbar-small_screen">
           <MdOutlineRestaurantMenu color='#fff' fontSize={27} className='close' onClick={() => { setstate(false) }} />
          <ul className="app__navbar-links-small">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
          </ul>
         </div>
        )}
      </div>



    </nav>
  );
};

export default Navbar;
