import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './css/row.css'
const Rows = ({ title, fetchUrl,
    openModal
}) => {
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        const getDataFromApi = async () => {
            const result = await axios.get(fetchUrl)
            setmovies(result.data.results)

        }
        getDataFromApi()
    }, [fetchUrl])

    return (
        <div>
            <h3>{title}</h3>
            {/* <div className='video_modal'>
                <Modal show={show} fullscreen={true} >
                    <Modal.Body className='biography_modal'>
                        < IoCloseSharp onClick={() => setShow(false)} className='biography_modalClose' />
                        <iframe src="https://player.vimeo.com/video/168194312?autoplay=1" className='videoplayer'></iframe>
                    </Modal.Body>
                </Modal>
            </div> */}
            <div className="row_posters">
                {
                    movies.map((movie) => {
                        // console.log(movie)
                        return (
                            <div onClick={e => openModal(movie?.title || '')}>
                                <img
                                    className={`row_poster ${title === "NETFLIX ORIGINALS" && "row_poster-bada "}`}
                                    key={movie.id}
                                    src={title === "NETFLIX ORIGINALS" ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`}
                                    alt={movie.name}
                                />
                                <p
                                    style={{ marginRight: "5px" }}
                                >{movie.name || movie.original_name || movie.original_title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rows
