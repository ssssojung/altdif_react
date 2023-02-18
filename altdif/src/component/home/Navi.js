import React from 'react';
import navi from '../../json/navi.json';
import Wrapper from '../Helper/Wrapper';


const Navi = (props) => {
    const naviDb = navi[props.keynm]
    return(
        <Wrapper>
            <ul id="nav" className="d-flex px-0">
                {
                    naviDb.map((item, idex)=>{
                        return(
                        
                        <li className='d1'key={navi.d1}>
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
            <ul className='d-flex pe-5'>
                <li><a href="#">LOGIN / JOIN</a></li>
                <li><a href="#">CART</a></li>
                <li><a href="#">ORDER</a></li>
                <li><a href="#">MY PAGE</a></li>
                <li><a href="#"><img src="../../img/search_icon.png" alt="search_icon" /></a></li>
            </ul>
        </Wrapper>
        
    )
};

export default Navi;