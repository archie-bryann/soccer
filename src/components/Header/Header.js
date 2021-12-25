import React, {useState} from 'react'
import './Header.css'
import { List, X } from 'react-bootstrap-icons'

function Header() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header>
            <img className = "logo" src = "images/foodnet-black.png" alt = "logo" />
            <nav className={!toggle && `close`}>
            <ul className = 'nav__links'>
                <li>Home</li>
                <li>About</li>
                <li>Academy</li>
                <li>Strategy</li>
                <li>Gallery</li>
                <li>FAQ</li>
                <li>Players</li>
                <li>Coaches</li>
                <li>Contact</li>
            </ul>
            </nav>
            <a className = "cta" href = "#"><button>Become A Player</button></a>
            {toggle ? <X size = {35} className = "menu" onClick = {handleToggle} /> : <List size = {35} className = "menu" onClick = {handleToggle} />}
            
            

        </header>
    )
}

export default Header
