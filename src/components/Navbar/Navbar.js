import React from 'react'
import './Navbar.css'
import handleMenu from './script'

class Navbar extends React.Component {

    componentDidMount() {
        handleMenu();
    }

    render() {
        return (
            <div className="navbar">
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
                <li><a href="#">Learning</a></li>
                <li><a href="#">Launching</a></li>
                <li><a href="#">Workflow</a></li>
            </ul>
            <div className="menu menu-icon">
                <img src="/images/icons/menu-icon.svg" alt=""/>
            </div>
            <div className="menu close-icon hide">
                <img src="/images/icons/close-icon.png" alt="" width="30" height="30"/>
            </div>
        </>
    )
}


export default Navbar;
