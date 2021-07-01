import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config';

export const createdAlbumContext = createContext();
export const AlbumContext = () => useContext(createdAlbumContext);
const initialAlbums = { loading: true, isLoaded: false, failed: false, errors: [], data: [] }

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
            .catch((err) => {
                setAlbums({...albums, loading: false, isLoaded: true, failed: true, errors:err.response.data})
            })
    }
    const getIfIsNotLoaded = () => {
        if (!albums.isLoaded) {
            getAlbums()
        }
    }
    return (
        <createdAlbumContext.Provider value={{
            albums, setAlbums,
            getAlbums,
            getIfIsNotLoaded
        }}>
            {props.children}
        </createdAlbumContext.Provider>
    )
}