import React,{useState} from 'react';
import Popup from './Popup';

// import Button from './Button';
function Modalbasic(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    }
    return (
        <div>
            <div class="YT text-center">
                <h2 class="YT_Title">YOUTUBE</h2>
                <div class="YT_info bs_txt_title_01">최신 소식을 유튜브에서 확인해보세요!</div>
                <div class="YT_sub bs_txt_title_01">#차 실험실 #혼돈의 홈카페</div>
                {/* <div class="YT_btn_more d-none"><a href="#none" target="_brank">MORE</a></div> */}
                <div class="bs_btn_youtube">
                    <a onClick={showModal} >
                        <i class="js-modal-btn1 xi-youtube-play" data-video-id="jVr8MjdazUk"></i>
                    </a>
                    
                </div> 
                {/* data-video-id 의 값을 영상 아이디로 변경 */}
            </div>
            {modalOpen && <Popup setModalOpen={setModalOpen}/>}
          

        </div>
    );
}

export default Modalbasic;