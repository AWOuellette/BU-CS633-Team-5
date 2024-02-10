import React from 'react'
import '../../styles/Navbar.css'
import logo from '../../icons/elearning.png'
import admin from '../../icons/setting-gear.png'
import {Link} from 'react-router-dom'

const Navbar= () => {
    {/* const [openLinks, setOpenLinks] = useState(false);*/}

    return (

    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} width={70} height={70} alt=""/>
            <p></p>
        </div>
        <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Browse">Browse</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>

        <div className="admin">

            <img src={admin} width={30} height={30} alt=""/>
            <p>Admin</p>
        </div>

    </div>
    )
}
export default Navbar