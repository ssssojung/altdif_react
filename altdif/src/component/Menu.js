import React from 'react';

function Menu(props) {
    return (
        <div id='Menu'>
            <div class="btnTop">
                <div><a href="#home">top</a></div>
                <div class="divider"></div>
                <div><a href="#footer">bottom</a></div>
            </div>
        </div>
    );
}

export default Menu;