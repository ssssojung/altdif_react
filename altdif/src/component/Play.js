import React from 'react';
import YouTube from 'react-youtube';
import { Swiper,SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import recipe from '../json/altdif_lsj.json';

function Play(props) {
    const recipeI = recipe[2][props.reI]
    return (
        <section id='play' className=''>
            
            <div className='d-flex row p'>
                
                <div className='d-flex row playBox '>
                    <div className='align-items-center pb-5 titletxt col-4'>
                        <h2>MAGAZINE</h2>
                        <span>알디프 에디터들이 쓰는 차 이야기</span>
                        <img className=''src="../../img/play/guide.png" alt="" />
                    </div>
                    <div className='col-8'>
                        <Swiper className="mySwiper"
                                modules={[Pagination, Autoplay]}
                                slidesPerView={2}
                                spaceBetween={30}
                                // pagination={{clickable: true,}}
                                autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                                }}
                            >
                            {
                            recipeI.map((item, index)=>{
                                return(
                                <SwiperSlide>
                                    <div className=''>
                                            <img className='recipeImg' src={item.recipeImg} alt="recipeImg"/>
                                        <div className='textB d-flex align-items-center flex-column'>
                                            <p>{item.recipeTitle}</p>
                                            <span className><a>추천제품 보러가기</a></span>
                                        </div>
                                    </div>
                                    
                                </SwiperSlide>
                                )
                                })
                            }     

                            </Swiper>
                            {/* 월욜에 반응형 스와이퍼 추가하기 */}
                    </div>
                        
                </div>
                <div className=' col-12 h_playBox mt-5 me-5'style={{width:"100vw"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/llWZNk7BmxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* <div className=' col-md-12 col-5 h_playBox mt-5 ' >
                    인터뷰
                </div> */}
            </div>
        </section>
        
    );
}

export default Play;