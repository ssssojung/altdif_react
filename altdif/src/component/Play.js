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
            
            <div className='d-flex row p mx-0'>
                
                <div className=' d-flex playBox '>
                    <div className='col-4 align-items-center pb-5 titletxt '>
                        <h2>MAGAZINE</h2>
                        <span>알디프 에디터들이 쓰는 차 이야기</span>
                        <img className=''src="../../img/play/guide.png" alt="" />
                    </div>
                    <Swiper className="mySwiper col-8"
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
                    {/* 반응형 스와이퍼 추가하기 모바일에서는 사진 하나씩만 나오는 스와이퍼로 변경*/}
                        
                </div>

                <div className=' col-12 playBox mt-5 bgstyle'>
                    
                    <div class="YT_pop text-center">
                        <h2 class="YT_Title">YOUTUBE</h2>
                        <div class="YT_info bs_txt_title_01">최신 소식을 유튜브에서 확인해보세요!</div>
                        <div class="YT_sub bs_txt_title_01">#차 실험실 #혼돈의 홈카페</div>
                        <div class="YT_btn_more d-none"><a href="https://www.youtube.com/@ALTDIFTV" target="_brank">MORE</a></div>
                        <div class="bs_btn_youtube"><i class="js-modal-btn1 xi-youtube-play" data-video-id="jVr8MjdazUk"></i></div> 
                        {/* data-video-id 의 값을 영상 아이디로 변경 */}
                    </div>

                </div>

                <div className='col-md-5 col-12 playBox mt-5 bg-white me-5 tea_test' >
                    <a href="https://altdif.com/miraclemoment/index.html">
                        <img src="../../img/play/tea_test.jpg" alt="tea_test"/>
                    </a>
                    <div className='tea_blur'><img src="../../img/play/altdif.png" alt="" /></div>
                </div>
                <div className='col-md-7 col-12 playBox mt-5 bg-white' style={{width:"44.1vw"}}>
                    만드는 중에 힘들었던거 쓰기
                </div>
            </div>
        </section>
        
    );
}

export default Play;