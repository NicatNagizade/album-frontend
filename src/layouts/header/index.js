import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div className="header container h-bg">
                <div className="logo">
                    <p>Album</p>
                </div>
                <ul className="navbar">
                        <li className="nav-list">
                            <Link to={'/'} data-testid="home-link"> Home </Link>
                        </li>
                    <li className="nav-list">
                        <a href="https://github.com/NicatNagizade/album-frontend" target="_blank" rel="noreferrer"> About </a>
                    </li>
                    <li>
                        <a href="mailto:nicatnagizade53@gmail.com">
                            <button className="contact-us">Contact Me</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}