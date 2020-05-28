import React, { useEffect, useReducer } from 'react';
import { meteorology } from '../http/service';
import { Mapa } from '../components/Mapa';
import { Temperature } from './Temperature';

function citiesReducer(state, action) {
    switch (action.type) {
        case 'GET_WEATHER':
            return { ...state, weather: action.weather };
        default:
            return state;
    }
}

export function Weather(cardinals) {
    const [state, dispatch] = useReducer(citiesReducer, {
        weather: null,
    });

    const north = cardinals.cardinals.north
    const south = cardinals.cardinals.south;
    const east = cardinals.cardinals.east;
    const west = cardinals.cardinals.west;

    useEffect(() => {
        meteorology(north, south, east, west).then(response => 
            dispatch({ type: 'GET_WEATHER', weather: response.data.weatherObservations})
            );     
    }, []);

    console.log(state.weather)

    return (
        <React.Fragment>

                    { state.weather !== null &&
                        <div>
                            <Mapa
                                cardinals={cardinals}
                                weather={state.weather}
                            />
                            <Temperature
                                weather={state.weather}
                            />
                        </div>
                    }

        </React.Fragment>
    )
}