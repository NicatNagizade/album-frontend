import React from 'react'
import AlbumProvider from './album'

export default function ContextProvider(props) {
    return (
        <AlbumProvider>
            {props.children}
        </AlbumProvider>
    )
}