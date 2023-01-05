import React from 'react';
import Header from './Header';
import Bannerswiper from './Bannerswiper';


function Home(props) {
    return (
        <div id='home'>
            <Header keynm='naviinfo'/>
            <Bannerswiper bnI='banner'/>
        </div>
    );
}

export default Home;