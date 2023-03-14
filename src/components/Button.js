import React from 'react';

function ButtonClick({buttonType, buttonOnClick, description, notEnabled}) {
    return (
        <button type={buttonType} onClick={buttonOnClick} disabled={notEnabled}>
            {description}
        </button>
    )
}

export default ButtonClick