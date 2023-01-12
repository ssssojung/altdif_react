import React from 'react';
import Reviewswiper from './Reviewswiper';

function Review(props) {
    
    return (
        <section id='review' className='p '>
            <div className='reviewBox '>
                <div className=''>
                    <Reviewswiper rev='review'/>
                </div>
            </div>
        </section>
    );
}

export default Review;