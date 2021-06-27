import React, { useEffect } from 'react'
import './styles.scss'
import { AlbumContext } from '../../contexts/album'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'

export default function Albums() {
    const { albums, getIfIsNotLoaded } = AlbumContext()

    useEffect(() => {
        getIfIsNotLoaded()
    }, [])
    return (
        <div className="albums">
            <div className="container">
                <Loader load={albums.loading}>
                    {
                        albums && albums.data && albums.data.map((album, i) => {
                            return (
                                <div key={i} className="card-container bg">
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
                                            READ MORE
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