import React, { useState } from 'react';

export function SearchBar() {
    const [state, setState] = useState({ searchText:''})

    return (
        <React.Fragment>
            <div className='search'>
                <input
                    className='searchBar'
                    id='searchBar'
                    type='search'
                    placeholder='Busca una ciudad aquí...'
                    value={state.searchText}
                    onChange={e => setState(e.target.value)}
                    onKeyDown={e => (e.keyCode === 13) ? window.location.replace(`/buscar?p=${state}`) : null}
                />
            </div>
        </React.Fragment>
    )
}