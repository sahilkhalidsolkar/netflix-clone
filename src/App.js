import './App.css';
import Rows from './components/Rows';
import requests from './request';
import Banner from './components/Banner';
import { useState } from 'react';
import './components/css/videoModel.css'
import movieTrailer from 'movie-trailer';
import TrailerModel from './components/TrailerModel';
import Nav from './components/Navbar';
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState('')
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {

      autoplay: 1,
    },
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width: 'fit-content',
      height: '70%',
      background: 'rgb(17, 17, 17)',
      border: 'none',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',

    },
  };
  function openModal(movie) {
    setIsOpen(true);
    movieTrailer(movie)
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setCurrentTrailer(urlParams.get('v'))
        console.log(url)
      })

  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <TrailerModel
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        opts={opts}
        currentTrailer={currentTrailer}
      />
      <Nav />
      <Banner />
      <Rows openModal={openModal} title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows openModal={openModal} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows openModal={openModal} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows openModal={openModal} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows openModal={openModal} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows openModal={openModal} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows openModal={openModal} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Rows openModal={openModal} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
