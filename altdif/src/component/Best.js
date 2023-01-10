import React from 'react';
import bestproduct from '../json/altdif_lsj.json';

function best(props) {
    const bestPro = bestproduct[1][props.best]
    // console.log(bestProduct);/
    return (
        bestPro.map((item,index) => {
            return(
                
                <div className='best col-3'>
                    <img className='productI'src={item.lsj_proImg} alt='bestitemI'/>
                    <div className='textB px-3'>
                        <h5>{item.lsj_proName}</h5>
                        <p>{item.lsj_prosummary}</p>
                        <p>{item.lsj_proPrice}</p>
                    </div>
                    
                </div>
            )
        })
    );
}

export default best;