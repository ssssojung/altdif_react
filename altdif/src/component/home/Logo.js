import React from 'react';

const Logo = (props) => {
    return(
        <React.Fragment>
            <h2>
                <a href="#home">
                    <img className='ps-5' src="../../../img/logo.png" alt="logo"/>
                </a>
            </h2>
        </React.Fragment>
    )
};

export default Logo;