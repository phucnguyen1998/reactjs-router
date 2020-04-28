import React, { Component } from 'react';
import { 
    Route,
    Link,
} from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: true
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
        path= {to}
        exact= {activeOnlyWhenExact}
        children= { ({match})=>{
            let active = match ? 'active abb' : '';
            return (
            <li className = {`class ${active}`}>
                <Link className="nav-link" to={to}>
                {label}
                </Link>
            </li>
            )
        } }
        />
    )
}

class Menu extends Component {

    showMenu = (menus) => {
        let result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
                )
            })
        }
        return result;
    }

    render() {
        return (
        
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenu(menus)} 
                </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;