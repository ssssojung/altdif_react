import React from 'react';
import Header from './Header';
import Bannerswiper from './Bannerswiper';


function Home(props) {
    return (
        <section id='home'>
            <Header keynm='naviinfo'/>
            <Bannerswiper bnI='banner'/>
        </section>
    );
}

export default Home;