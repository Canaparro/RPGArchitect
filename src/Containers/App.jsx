import React from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'
import './App.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <HomePage/>
            </div>
        )
    }
}

export default Header