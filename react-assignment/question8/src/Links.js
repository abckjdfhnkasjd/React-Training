import React from 'react';
import {Link} from 'react-router-dom';

const Links = () => {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Links;