import React from 'react'
import Modal from 'react-modal';
import './css/videoModel.css'
import YouTube from 'react-youtube';

const TrailerModel = ({ modalIsOpen, closeModal, customStyles, opts, currentTrailer
}) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >


                <YouTube videoId={currentTrailer} opts={opts} className='videoplayer'
                    onReady={(e) => e.target.pauseVideo()} />
            </Modal>
        </div>
    )
}

export default TrailerModel