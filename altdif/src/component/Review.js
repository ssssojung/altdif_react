import React from 'react';
import reviewinfo from '../json/altdif_lsj.json';

function Review(props) {
    const review = reviewinfo[3][props.rev]
    console.log(review);
    return (
        <section id='review'>
            <div className='container'>
                <div className='d-flex row'>
                    {
                        review.map((item, index)=>{ 
                            return(
                                <div className='col reviewB'>
                                    <img className='revI'src={item.reviewImg} alt="reviewImg" />
                                    <p>{item.reviewTitle}</p>
                                    <p>{item.reviewsummary}</p>
                                    <img src="../../img/review/ico_point.gif" alt="" />
                                </div>    
                            )
                        
                           
                        })
                    } 
                </div>
            </div>
        </section>
    );
}

export default Review;