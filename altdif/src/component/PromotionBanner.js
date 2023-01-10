import React from 'react';

function PromotionBanner(props) {
    return (
        <div id='promotionBanner' className='position-fixed'>
            <div className='position-relative'>
                 <a href='#none' class='bannerLink'>
                신규 회원가입 시 15% coupon 증정<span>Download now <img src=''/></span>
                </a>
                <a href='#none' class='btnClose'>
                    <i className="xi-close-thin"></i>
                </a>
            </div>
           
        </div>
    );
}

export default PromotionBanner;