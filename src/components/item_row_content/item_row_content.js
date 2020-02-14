import React from 'react';

import './item_row_content.css';

const ItemRowContent = ({leftElem, rightElem}) => {
    return (
        <div className="d-flex flex-md-row flex-column justify-content-around align-items-stretch py-2 my-1 row-content-container">
            <div className="d-flex left-content-box">
                {leftElem}
            </div>
            <div className="d-flex align-items-stretch right-content-box">
                {rightElem}
            </div>
        </div>
    );
}

export default ItemRowContent;