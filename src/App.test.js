import { cleanup, render, screen } from '@testing-library/react';
import Albums from './views/albums'
import Photos from './views/photos'
import { createdAlbumContext } from './contexts/album'
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header'

afterEach(cleanup)

const albumContext = {
  albums : {
    loading: false, isLoaded: true,
    data: [
      {
        id: 1,
        userId: 1,
        title: "test title",
        photos: [
          {
            albumId: 1,
            title: "photo test title",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
          }
        ]
      }
    ]
  },
  getIfIsNotLoaded : () => { }
}

test('Testing home link on header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByTestId('home-link')).toHaveAttribute('href', '/')
})

test('Testing albums view', () => {
  const {albums, getIfIsNotLoaded} = albumContext
  render(
    <BrowserRouter>
      <createdAlbumContext.Provider value={{ albums, getIfIsNotLoaded }}>
        <Albums />
      </createdAlbumContext.Provider>
    </BrowserRouter>
  );
  const album = albums.data[0]
  expect(screen.getByTestId('albums')).toHaveTextContent(album.title)
  const showAllButton = screen.getByTestId('albums').querySelector('.read-more')
  expect(showAllButton.querySelector('a')).toHaveAttribute('href', '/album/'+album.id+'/photo')
  const photoComponent = screen.getByTestId('albums').querySelector('.card')
  expect(photoComponent.querySelector('img')).toHaveAttribute('src', album.photos[0].thumbnailUrl)
})

test('Testing photos view', () => {
  const {albums, getIfIsNotLoaded} = albumContext
  const album = albums.data[0]
  const photo = album.photos[0]
  render(
    <BrowserRouter>
      <createdAlbumContext.Provider value={{ albums, getIfIsNotLoaded }}>
        <Photos match={{params:{id:1}}} />
      </createdAlbumContext.Provider>
    </BrowserRouter>
  );
  expect(screen.getByTestId('photos')).toHaveTextContent(photo.title)
  expect(screen.getByTestId('photos').querySelector('img')).toHaveAttribute('src', photo.url)
})