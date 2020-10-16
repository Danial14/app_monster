import React from 'react';

export const Search = props => {
    const {placeholder, handler} = props;
    return <input type="search" placeholder={placeholder} onChange={handler}/>
    }