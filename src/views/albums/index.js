import React, { useEffect, useState } from 'react'
import './styles.scss'
import { AlbumContext } from '../../contexts/album'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'
import InputSearch from '../../components/input_search'

export default function Albums() {
    const { albums, getIfIsNotLoaded } = AlbumContext()
    const [value, setValue] = useState('')
    const [filteredAlbums, setFilteredAlbums] = useState(albums)
    useEffect(() => {
        getIfIsNotLoaded()
    }, [])

    useEffect(() => {
        const data = value ? albums.data.filter(e => {
            return e.title.includes(value)
        }) : albums.data
        setFilteredAlbums({ ...albums, data: data })
    }, [albums, value])
    return (
        <div className="albums" data-testid="albums">
            <div className="container bg">
                <Loader load={filteredAlbums.loading}>
                    <InputSearch className="albums-search" setValue={setValue} />
                    {
                        filteredAlbums && filteredAlbums.data && filteredAlbums.data.map((album, i) => {
                            return (
                                <div key={i} className="card-container">
                                    <h3>{album.title}</h3>
                                    <div className="card-pictures">
                                        {
                                            album.photos.slice(0, 6).map((photo, j) => {
                                                return (
                                                    <div key={j} className="card">
                                                        <img alt="" src={photo.thumbnailUrl} width="150" height="150" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <button className="read-more">
                                        <Link to={`/album/${album.id}/photo`}>
                                            SHOW ALL
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                                        </Link>
                                    </button>
                                </div>
                            )
                        })
                    }
                </Loader>
            </div>
        </div>
    )
}