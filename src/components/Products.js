import React from 'react';

function Product({indicator, image, productText, price}) {
    return (
        <article>
                    <span>
                        {indicator}
                    </span>
            <img src={image} alt={productText} />
            <p>{productText}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product