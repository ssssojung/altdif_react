import React from 'react';
import Best from './Best';

function Product(props) {
    return (
        <section id='product' className='px-5'>
            <div className='d-flex align-items-start flex-column py-5'>
                 <h2>Best Product</h2>
                 <span>베스트상품을 지금 바로 만나보세요</span>
             </div>
             <div className='d-flex'>
             <Best best='best'/>
             </div>
      </section>
    );
   
}

export default Product;
