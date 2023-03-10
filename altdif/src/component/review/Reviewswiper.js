import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import reviewinfo from '../../json/altdif_lsj.json';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/style.scss";


import { Autoplay, Pagination} from "swiper";

function Reviewswiper(props) {
const review = reviewinfo[3][props.rev]
    return (
        <div className='text-center'>
            <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        id="reviewswiper"className=" mySwiper d-flex justify-contents-center"
      >
        {
            review.map((item, index)=>{ 
                return(
                    <>
                    <SwiperSlide>
                    <div className='col-4 reviewB'>
                        <img className='revI'src={item.reviewImg} alt="reviewImg" />
                        <p className='m-0 pt-4'style={{fontSize: "1.2rem"}}>{item.reviewTitle}</p>
                        <p className='m-0 pt-2'>{item.reviewsummary}</p>
                        <img className='pt-2 pb-4' src="../../img/review/ico_point.gif" alt="" />
                    </div>
                    </SwiperSlide> 
                    </>
                )
            
               
            })
        }
        
        
      </Swiper>
        </div>
    );
}

export default Reviewswiper;