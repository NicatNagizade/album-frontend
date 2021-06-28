import React, { useEffect, useState } from 'react'
import { AlbumContext } from '../../contexts/album'
import './styles.scss'
import Loader from '../../components/loader'
import InputSearch from '../../components/input_search'

export default function Photos(props) {
    const initialAlbum = { id: 0, title: '', photos: [] }
    const [album, setAlbum] = useState(initialAlbum)
    const [value, setValue] = useState()
    const { getIfIsNotLoaded, albums } = AlbumContext()
    const [filteredAlbum, setFilteredAlbum] = useState(album)
    const id = props.match.params.id
    useEffect(() => {
        getIfIsNotLoaded()
    }, [])
    useEffect(() => {
        const data = albums.loading
        ? initialAlbum
        : albums.data.find(e => {
            return e.id == id
        })
        setAlbum(data)
    }, [albums, id])
    console.log(album)
    useEffect(() => {
        const data = value ? album.photos.filter(e => {
            return e.title.includes(value)
        }) : album.photos
        setFilteredAlbum({ ...album, photos: data })
    }, [value, album])
    return (
        <div className="photos bg-pho">
            <Loader load={albums.loading}>
                <InputSearch className="photos-search" setValue={setValue} />
                {
                    filteredAlbum &&
                    <div className="photos-container">
                        <div className="photos-title">{filteredAlbum.title}</div>
                        <div className="photos-cards">
                            {
                                filteredAlbum.photos.map((photo, i) => {
                                    return (
                                        <div key={i} className="photo-card">
                                            <img className="photo-image" src={photo.url} alt="" />
                                            <div className="photo-title">
                                                <p>{photo.title}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </Loader>
        </div>
    )
}