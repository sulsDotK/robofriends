import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--ggreen bg-lightest-blue'
            type = 'search'
            placeholder='Search robots..'                
            onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;