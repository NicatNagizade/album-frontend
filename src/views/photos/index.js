import React, { useEffect, useState, Fragment } from 'react'
import { AlbumContext } from '../../contexts/album'
import './styles.scss'
import Loader from '../../components/loader'

export default function Photos(props) {
    const [album, setAlbum] = useState()
    const { getIfIsNotLoaded, albums } = AlbumContext()
    const id = props.match.params.id
    useEffect(() => {
        getIfIsNotLoaded()
    }, [])
    useEffect(() => {
        setAlbum(albums.data.find(e => {
            return e.id == id
        }))
    }, [albums, id])
    return (
            <div className="photos bg-pho">
                <Loader load={albums.loading}>
                    <div className="bg">
                        {
                            album &&
                            <Fragment>
                                <div className="photos-title">{album.title}</div>
                                <div className="photos-cards">
                                    {
                                        album.photos && album.photos.map((photo, i) => {
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
                            </Fragment>
                        }
                    </div>
                </Loader>
            </div>
    )
}