import React from 'react';

const OddEvenNumber = (props) => {
    const style= {
        display: 'inline-block',
        padding: '0px 10px',
        margin: '10px',
        border: '1px solid black',
    }
    return(
        <div style={style}>
            <p>{ props.number }</p>
        </div>
    );
}

export default OddEvenNumber;
