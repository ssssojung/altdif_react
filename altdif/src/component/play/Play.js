import React,{useState} from 'react';
import Modalbasic from './Modalbasic';
import { Swiper,SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import recipe from '../../json/altdif_lsj.json';
import '../../css/style.scss';
import '../../css/swiper.scss';

function Play(props) {
const playRe = recipe[2][props.reI]
// console.log(playRe);
    return (
        <section id='play' className=''>
            
            <div className='d-flex row p mx-0'>
                
                <div className=' d-flex playBox '>
                    <div className='col-4 align-items-center titletxt '>
                        <h2>MAGAZINE</h2>
                        <span>알디프 에디터들이 쓰는 차 이야기</span>
                        <img className=''src="../../img/play/guide.png" alt="" />
                    </div>
                    <Swiper className="mySwiper col-8"
                            modules={[Pagination, Autoplay]}
                            slidesPerView={2}
                            spaceBetween={30}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                        >
                        {
                        playRe.map((item, index)=>{
                            return(
                            <SwiperSlide>
                                <div id='recipeswiper'>
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
                    {/* 반응형 스와이퍼 추가하기 모바일에서는 사진 하나씩만 나오는 스와이퍼로 변경*/}
                        
                </div>

                <div className=' col-12 playBox mt-5 bgstyle'>
                    <Modalbasic/>
                </div>
                
                <div className='col-md-5 col-12 playBox mt-5 bg-white me-5 tea_test' >
                    <a href="https://altdif.com/miraclemoment/index.html">
                        <img src="../../img/play/tea_test.jpg" alt="tea_test"/>
                        <div className='tea_blur'><img src="../../img/play/altdif.png" alt="" /></div>
                    </a>
                </div> 
                
                <div className='col-md-7 col-12 playBox mt-5 bg-white' style={{width:"44.1vw"}}>
                    만드는 중에힘들었던거 쓰기
                </div>
                
            </div>
        </section>
        
    );
}
// 
export default Play;
