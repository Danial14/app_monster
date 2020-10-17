import React from 'react';
import '../styles/search-box.style.css';

export const Search = props => {
    const {placeholder, handler} = props;
    return <input className="search" type="search" placeholder={placeholder} onChange={handler}/>
    }