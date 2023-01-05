import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import bannerimg from '../json/altdif_lsj.json';


function Bannerswiper(props) {
  const bannerI = bannerimg[0][props.bnI]
  // console.log(bannerI);/

    return (
       //Pagination, 뺐음
            <Swiper className='px-0'
            modules={[Navigation,  Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >

          {

bannerI.map((item, index)=>{
  return(
<SwiperSlide><img src={item.bannerImg} alt="mainbannerI"/></SwiperSlide>
  )

})
          }
             
                
               
           
             
             
              
              
            </Swiper>
         
    );
}

export default Bannerswiper;