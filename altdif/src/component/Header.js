import React from 'react';
import navi from '../json/navi.json';
function Header(props) {
    const naviDb = navi[props.keynm]
        // let navi = '';
        // for(let i in naviData){
        //     navi +=`<li class='d1'><a href='${naviData[i].d1link}'>${naviData[i].d1}</a><ul class='d2'>`;
        //     for(let j in naviData[i].d2 ){
        //         navi +=`<li><a href='${naviData[i].d2[j].d2link}'>${naviData[i].d2[j].d2text}</a></li>`;  
        //     }
        //     navi +=`</ul></li>`;
    
        // }
        // document.querySelector('#nav').inner = navi;
    
    return (
        <div id='hd' className='position-fixed p-3 d-flex align-items-center shadow'>
            <h2 className='col justify-content-start d-flex'>
                <a href="#home">
                    <img className='ps-5' src="../../../img/logo.png" alt="logo"/>
                </a>
            </h2>
        <ul id="nav" className='col d-flex justify-content-center'>
            {
                naviDb.map((item, idex)=>{
                    return(
                    
                    <li className='d1'>
                            <a href={ item.d1link }>
                                { item.d1 }
                            </a>
                            <ul className='d2'>
                                {
                                    item.d2.map( (item2, index ) => {
                                        return (
                                            <li><a href="#none" >{ item2.d2text} </a></li>
                                        )

                                    })
                                    
                                }
                            </ul>
                    </li>
                       
                    )
                })
            }
        </ul>
        <ul id='top_right' className='d-flex col justify-content-end'>
             <li><a href="#">LOGIN / JOIN</a></li>
             <li><a href="#">CART</a></li>
             <li><a href="#">ORDER</a></li>
             <li><a href="#">MY PAGE</a></li>
             <li><a href="#"><img src="../../img/search_icon.png" alt="search_icon" /></a></li>
        </ul>
        </div>
    );
}

export default Header;