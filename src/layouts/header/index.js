import React, { useState } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    const links = [{ name: "Home", to: "/" }, { name: "Albums", to: "/album" }]
    const [active, setActive] = useState(0)
    const handleClick = (i) => {
        setActive(i)
    }
    return (
        <div className="header">
            <ul>
                {
                    links.map((l, i) => {
                        return i === active
                        ?
                         <li className="active" onClick={() => handleClick(i)} key={i}><Link to={l.to}>{l.name}</Link></li>
                         :
                         <li onClick={() => handleClick(i)} key={i}><Link to={l.to}>{l.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}