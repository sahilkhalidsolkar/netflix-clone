import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from '../request';
import './css/banner.css';
function Banner() {
    const [movies, setmovies] = useState({})

    useEffect(() => {
        const getSingleMovieFromApi = async () => {
            const SingleMovie = await axios.get(requests.fetchNetflixOriginals);
            setmovies(SingleMovie.data.results[Math.floor(Math.random() * 20)])
        }
        getSingleMovieFromApi()
    }, [])
    console.log(movies)
    return (
        <div className="banner"
            style={
                {
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
                    backgroundPosition: 'center center',

                }
            }
        >


            <div className="banner-contents ">
                <h2 className="banner-title">{movies.name || movies.original_name}</h2>
                <div className="banner-buttons">
                </div>
                <h1 className='banner-description '>

                    {movies.overview}
                    {/* || {movies.overview.length >200 ? movies.overview.slice(0,200)+"..." :movies.overview}  */}
                </h1>
            </div>
            {/* <div className="darkfade"> </div> */}
            {console.log(movies)}
        </div>
    )
}

export default Banner
