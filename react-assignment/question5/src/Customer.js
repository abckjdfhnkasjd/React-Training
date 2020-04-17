import React from 'react';

const Customer = (props) => {
    return(
        <div>
            <p>Customer ID: {props.customer.id}, Customer Name: {props.customer.name}, Customer Address: {props.customer.address}</p>
        </div>
    );
}

export default Customer; 