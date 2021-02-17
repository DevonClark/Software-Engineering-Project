import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import './NavBar.css'
import { IconContext } from 'react-icons/lib'
import { Container, Divider, Header } from 'semantic-ui-react'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menubars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.icon}

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
                <Divider horizontal>
                    <Header as='h2'>
                        Admin Dashboard
                        </Header>
                </Divider>
            </IconContext.Provider>



        </>
    )
}
export default Navbar;

