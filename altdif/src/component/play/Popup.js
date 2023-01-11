import React,{useState} from 'react';
import '../../css/popup.scss';

function Popup ({setModalOpen}) {
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
       <div>
            <div id='YT_pop'>
                <div className='YT_modal '>
                    <a className='more' href="https://www.youtube.com/@ALTDIFTV"  onClick={closeModal}>more</a>
                    <a onClick={closeModal}><i  className='xi-close-thin'></i></a>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sTbJHauqx_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
       </div>
    );
}

export default Popup;