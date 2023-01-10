import React,{useState} from 'react';


function Popup (props) {
    const {onClose} = props;
    return (
        <div className='YT_pop'>
            <div className='YT_modal'>
                <a href="https://www.youtube.com/@ALTDIFTV">more</a>
                <i className='xi-close-thin' onClick={()=>{onClose(false)}}></i>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sTbJHauqx_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Popup;