import React from 'react'
import './styles.scss'

export default function InputSearch(props) {
    const { setValue } = props
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={"search-component " + props.className} style={props.style}>
            <input type="search" placeholder="search" onChange={handleChange} />
        </div>
    )
}