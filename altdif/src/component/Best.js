import React from 'react';
import bestproduct from '../json/altdif_lsj.json';

function best(props) {
    const bestPro = bestproduct[1][props.best]
    // console.log(bestProduct);/
    return (
        bestPro.map((item,index) => {
            return(
                <div className='col-2'>
                    <img src={item.lsj_proImg} alt='bestitemI'/>
                    <p>{item.lsj_proName}</p>
                    <p>{item.lsj_prosummary}</p>
                    <p>{item.lsj_proPrice}</p>
                </div>
            )
        })
    );
}

export default best;