import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config';

const ContextAlbum = createContext();
const initialAlbums = { loading: true, isLoaded: false, errors: [], data: [] }

export const AlbumContext = () => useContext(ContextAlbum);

export default function AlbumProvider(props) {
    const [albums, setAlbums] = useState(initialAlbums)
    const resetAlbums = () => {
        setAlbums(initialAlbums)
    }
    const getAlbums = () => {
        resetAlbums()
        axios.get(API_URL + '/album')
            .then(res => {
                setAlbums({ ...albums, loading: false, isLoaded: true, data: res.data })
            })
    }
    const getIfIsNotLoaded = () => {
        if (!albums.isLoaded) {
            getAlbums()
        }
    }
    return (
        <ContextAlbum.Provider value={{
            albums, setAlbums,
            getAlbums,
            getIfIsNotLoaded
        }}>
            {props.children}
        </ContextAlbum.Provider>
    )
}