import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { Weather } from '../components/Weather';
import { SearchBar } from '../components/SearchBar';
import { geography } from '../http/service';

import '../css/searchBar.css';
import '../css/main.css';

function citiesReducer(state, action) {
    switch (action.type) {
        case 'GET_CITY':
            return { ...state, city: action.city };
        default:
            return state;
    }
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Search() {
    const query = useQuery();
    const [state, dispatch] = useReducer(citiesReducer, {
        city: null,
    });

    const searchText = query.get('p');

    /*Hacemos la llamada al servicio y nos quedamos con el primer resultado del array para facilitar las cosas*/

    useEffect(() => {
        geography(searchText).then(response =>
            dispatch({ type: 'GET_CITY', city: response.data.geonames[0]})
            );
    }, []);

    console.log(state.city);

    return (
        <React.Fragment>
            <main>
                <section>
                    <h1>WEATHER APP</h1>
                    <SearchBar />
                    { state.city !== null &&
                        <div className='elements'>
                            <div className='city'>
                            <p><b>City</b>: {state.city.name}</p>
                            <p><b>Population</b>: {state.city.population}</p>
                            <p><b>Country</b>: {state.city.countryName}</p>
                            </div>
                            <Weather
                                cardinals={state.city.bbox}
                            />
                        </div>
                    }
                </section>

            </main>
        </React.Fragment>
    )
}