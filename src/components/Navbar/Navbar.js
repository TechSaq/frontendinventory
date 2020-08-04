import React from 'react'
import './Navbar.css'
import { handleMenu, handleDropdown} from './script'

class Navbar extends React.Component {

    componentDidMount() {
        handleMenu();
        handleDropdown();        
    }


    render() {
        const categories = this.props.categories;
        const subCategories = this.props['sub-categories'];
        return (
            <div className="navbar">
                <div className="dropdownbg hide">
                    <span className="dropdown-arrow"></span>
                </div>
                <Brand></Brand>
                <NavMenuList categories={categories} sub-categories={subCategories}></NavMenuList>
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

function NavMenuList(props) {

    const keysSubCategories = Object.keys(props['sub-categories']);

    const listSubCategories = props['sub-categories'];

    function list(params) {
        const html = listSubCategories[params].map((item, index) => {
            const list =
                <li key={index}>
                    <a href="#">{item}</a>
                </li>
            return list
        })
        return html
    }

    const listDropdownMap = keysSubCategories.map((navItem, index) => {
        const html =
            <li className="menu-item" key={index}>
                <a href="#">{navItem}</a>
                <ul className="dropdown hide">
                    {list(navItem)}
                </ul>
            </li>

        return html;
    });

    return (
        <>
            <ul className="menu-list">
                {listDropdownMap}
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
