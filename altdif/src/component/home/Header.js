import React from 'react';
import Navi from './Navi';
import Logo from './Logo';
import Wrapper from '../Helper/Wrapper';
function Header(props) {
    return (
        <React.Fragment>
                <div id='hd' className='pt-2 position-fixed align-items-center justify-content-between shadow d-none d-lg-flex'>
                    <Logo/>
                    <Navi keynm='naviinfo'/>
                </div>
        </React.Fragment>

    );
}

export default Header;