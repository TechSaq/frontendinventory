import React from 'react'
import './Navbar.css'
import { handleMenu, handleDropdown} from './script'

class Navbar extends React.Component {

    componentDidMount() {
        handleMenu();
        handleDropdown();
    }

    render() {
        return (
            <div className="navbar">
                <div className="dropdownbg hide">
                    <span className="dropdown-arrow"></span>
                </div>
                <Brand></Brand>
                <NavMenuList></NavMenuList>
            </div>
        )
    }
}


function Brand() {
    return (
        <div className="brand">
            frontendinventory
        </div>
    )
}

function NavMenuList() {
    return (
        <>
            <ul className="menu-list">
                <li className="menu-item">
                    <a href="#">Learning</a>
                    <ul className="dropdown hide">
                        <li><a href="#">Reading</a></li>
                        <li><a href="#">Online Courses</a></li>
                        <li><a href="#">Videos</a></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#">Launching</a>
                    <ul className="dropdown hide">
                        <li><a href="#">Deployment</a></li>
                        <li><a href="#">Reporting</a></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#">Workflow</a>
                    <ul className="dropdown hide">
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Colors</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Frameworks &amp; Libraries</a></li>
                    </ul>
                </li>
            </ul>
            <div className="menu menu-icon">
                <img src="/images/icons/menu-icon.svg" alt=""/>
            </div>
            <div className="menu close-icon hide-d">
                <img src="/images/icons/close-icon.png" alt="" width="30" height="30"/>
            </div>
        </>
    )
}

export default Navbar;
