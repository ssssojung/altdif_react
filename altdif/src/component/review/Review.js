import React from 'react';
import Reviewswiper from './Reviewswiper';

function Review(props) {
    
    return (
        <section id='review' className='p '>
            <div className='reviewBox '>
                <div className='d-flex align-items-start align-items-center pb-4 titletxt'>
                    <h2>Review</h2>
                    <p>후기 적립금 최대 <span>3,000원</span> 지급</p>
                </div>
                
                {/* <div className=''>/ */}

                    <Reviewswiper rev='review'/>
                {/* </div> */}
            </div>
        </section>
    );
}

export default Review;