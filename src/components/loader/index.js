import React from 'react'
import './styles.scss'

export default function Loader({load = false, children})
{
    return (
        load ?
        <div className="loader"></div>
        : 
        children
    )
}