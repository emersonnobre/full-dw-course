import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem route="" icon="home" label="Início" />
            <NavItem route="users" icon="users" label="Usuários" />
        </nav>
    </aside>

const NavItem = props => 
    <Link to={`/${props.route}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>