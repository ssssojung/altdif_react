import React from 'react';

function Footer(props) {
    return (
        <section id='footer' className='d-flex m-5'>
            <div className='col-7 ' >
                <div className='d-flex'>
                    <div className='col-7'>
                        <p className='csInfo'>C/S CENTER <span>통화량이 많을때는 Q&A를 이용해주세요</span></p>
                        <ul className='csInfo d-flex '>
                            <li className='col-4'>
                                <p className='tbold'> 070.7759.5033</p>
                            </li>
                            <li className='col-8'>
                                <p>화~토 11:30 ~ 21:30 (일,월 휴무)<br/>티 바 이용 및 예약, 오프라인 제품 구매 문의</p> 
                            </li>
                        </ul>
                        <ul className='csInfo d-flex '>
                            <li className='col-4'>
                                <p className='tbold'> 070.7759.5033</p>
                            </li>
                            <li className='col-8'>
                                <p>화~토 11:30 ~ 21:30 (일,월 휴무)<br/>티 바 이용 및 예약, 오프라인 제품 구매 문의</p> 
                            </li>
                        </ul>
                    </div>
                    <div className='col-5'style={{marginLeft:"10px",paddingRight:"30px"}}>
                        <p className='csInfo'>BANK INFO</p>
                        <p>기업은행 600.033774.01.011<br/>
                            예금주 주식회사 알디프</p>
                    </div>
                </div>
                <div className='col-12 d-flex'>
                    <div className='snsP col-2'>
                        <img src="../../img/footer/footer_sns_img_05.jpg" alt="카카오톡이미지" style={{width:""}} />
                    </div>
                    <div className='col-10'>
                        <p>카카오톡 채널로 문의하기<br/>
                            월~금 10:30 ~ 18:30(토,일 휴무)<br/>
                            온라인 제품 구매, 배송, 도매, 협업 및 기타 문의
                        </p>
                    </div>
                </div>
                
            </div>
            <div className='footer_sns col-5'>
                <div className='d-flex justify-content-end'>
                    <img src="../../img/footer/footer_sns_img_01.jpg" alt="" />
                    <img src="../../img/footer/footer_sns_img_02.jpg" alt="" />
                    <img src="../../img/footer/footer_sns_img_03.jpg" alt="" />
                    <img src="../../img/footer/footer_sns_img_04.jpg" alt="" />
                </div>
                <p className='d-flex justify-content-end'><span>COPYRIGHT ⓒ 2023 알디프. ALL RIGHTS RESERVED</span></p>
            </div>
        </section>
    );
}

export default Footer;
{/* <ul className='text-start col'>
                    <li className='pb-5'>c/s center<span>통화량이 많을때는 Q/A를 이용해주세요</span></li>
                    <li className='d-flex'>
                                            </li>
                    <li className='d-flex'>
                        <p className='col-5 tbold'>070.7759.5033</p>
                        <p className='col-4'>화~토 11:30 ~ 21:30 (일,월 휴무)<br/></p>
                    </li>
                    <li className='d-flex'></li>
                </ul> */}