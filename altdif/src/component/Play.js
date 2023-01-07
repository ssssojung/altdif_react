import React from 'react';
import Playswiper from './Playswiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Play(props) {
    return (
        <section id='play'>
            <div className='d-flex p-5'>
                <div className='col-12'>
                <Swiper className="mySwiper"
                    modules={[Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{clickable: true,}}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><Playswiper reI='playRe'/></SwiperSlide>
                    <SwiperSlide>222</SwiperSlide>
                    <SwiperSlide>222</SwiperSlide>
                    <SwiperSlide>222</SwiperSlide>
                    <SwiperSlide>222</SwiperSlide>
                    <SwiperSlide>222</SwiperSlide>
                    {/*  */}

                </Swiper>
                </div>
                {/* <div>유튜브</div>
                <div>기획시리즈</div>
                <div>차취향테스트</div>
                <div>인터뷰</div> */}
            </div>
        </section>
    );
}

export default Play;
{/* <Playswiper reI='playRe'/> */}