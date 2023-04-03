import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <div className="header" id='header'>
        <img src={Logo} className="logo"/>
        {menuOpened===false && mobile===true?(
          <div 
          onClick={()=>setMenuOpened(true)}
          style={{
            backgroundColor:"var(--appColor)",
            padding:"0.5rem",
            borderRadius:"5px"
            }}>
            <img src={Bars} alt="" style={{width:"1.5rem",height:"1.5rem"}}/>
          </div>
        ):(<ul className='header-menu'>
        <li ><Link 
        to='home'
        activeClass='active'
        span={true}
        smooth={true}
        onClick={()=>setMenuOpened(false)}
        >Home</Link>
        </li>
        <li ><Link
        to='programs'
        span={true}
        smooth={true}
        onClick={()=>setMenuOpened(false)}
        >Programs</Link>
        </li>
        <li ><Link
        onClick={()=>setMenuOpened(false)}
        >Why Us</Link>
        </li>
        <li ><Link
        to='plans'
        span={true}
        smooth={true}
        onClick={()=>setMenuOpened(false)}
        >Plans</Link>
        </li>
        <li onClick={()=>setMenuOpened(false)}><Link
        to='testimonials'
        span={true}
        smooth={true}
        >Testimonials</Link></li>
    </ul>)
    }
        
    </div>
  )
}

export default Header