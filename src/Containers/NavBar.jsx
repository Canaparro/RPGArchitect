import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md text-light bg-dark fixed-top">
                <a className="navbar-brand">
                    <img src="./favicon.ico" className="logo d-inline-block" alt=""/>
                    RPG Architect
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link">Home</a>
                    </div>
                </div>
                <button className="btn btn-outline-info my-2 my-sm-0">Login</button>
            </nav>
        )
    }
}

export default NavBar