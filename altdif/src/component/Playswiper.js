import React from 'react';
import {SwiperSlide} from 'swiper/react';
import recipe from '../json/altdif_lsj.json';


function Playswiper(props) {
    const recipeI = recipe[2][props.reI]
    console.log(recipeI)

    return (
        recipeI.map((item,index)=> {
            return(
                <div>
                    <SwiperSlide>
                            <img src={item.recipeImg} alt="" />
                            <div className='textB'>
                                <p>알디프 레시피 - {item.recipeTitle}</p>
                                <p>{item.recipesummary} [추천 제품 보러 가기]['더 많은 레시피 보러가기]</p>
                            </div>
                     </SwiperSlide>
                 </div>   
                    
            )
        })
    );
}

export default Playswiper;
{/* recipeI.map */}
{/* <SwiperSlide>
    <div>
    <img src="" alt="" />
    <div className='textB'>
        <p></p>
        <p>{}</p>
    </div>
    </div>
</SwiperSlide> */}