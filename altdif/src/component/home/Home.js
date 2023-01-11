import React from 'react';
import PromotionBanner from '../PromotionBanner';
import Header from './Header';
import Bannerswiper from './Bannerswiper';


function Home(props) {
    return (
        <section id='home'>
            {/* <PromotionBanner/> */}
            <Header keynm='naviinfo'/>
            <Bannerswiper bnI='banner'/>
        </section>
    );
}

export default Home;