import React from 'react';
import Best from './Best';

function Product(props) {
    return (
        <section id='product' className='px-0'>
            <div className='align-items-start px-5 titletxt'>
                 <h2>Best Product</h2>
                 <span>베스트상품을 지금 바로 만나보세요</span>
             </div>
             <div className='d-flex px-5'>
                <div className='col-10 d-flex'>
                 <Best best='best'/>
                </div>
                <div class="flow-container col-2">
                    <div class="flow-text ">
                        <div class="flow-wrap">We Blend Life, altdif</div>
                        <div class="flow-wrap">We Blend Life, altdif</div>
                        <div class="flow-wrap">We Blend Life, altdif</div>
                        <div class="flow-wrap">We Blend Life, altdif</div>
                    </div>
                </div>
             </div>
            <style>

            </style>
      </section>
    );
   
}

export default Product;
