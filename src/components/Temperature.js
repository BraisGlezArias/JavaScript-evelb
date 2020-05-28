import React from 'react';
import Bars from 'react-bars';

import '../css/temperature.css';

export function Temperature(weather) {

    /*Cuando hay varias estaciones, agrupamos la temperatura que recoje cada una en un array 
    y calculamos la media para representarla en la interfaz gráfica*/

    const temperatures = weather.weather.map(location => parseInt(location.temperature));

    const avgTemperature = () => {
        if (temperatures.length !== 0) {
            return Math.round(temperatures.reduce((a, b) => a + b) / temperatures.length);
        }
    }
    
    const color = (temperature) => {
        switch(true) {
            case temperature <= -10:
                return 'darkblue';
            case temperature > -10 && temperature <= 0:
                return 'blue';
            case temperature > 0 && temperature <= 10:
                return 'green';
            case temperature > 10 && temperature <= 20:
                return 'yellow';
            case temperature > 20 && temperature <= 30:
                return 'orange';
            case temperature > 30:
                return 'red';
            break;
        }
    }

    /*Como el gráfico que usamos es de 0 a 100, usamos un rango de -50 a 50 ºC*/

    const valor = avgTemperature() - (-50);

    return (
        <React.Fragment>
            { temperatures.length !== 0 &&
                <section className='temperature'>
                    <Bars
                        data={[{label:`${avgTemperature()} ºC`, value:`${valor}`}]}
                        barColor={color(avgTemperature())}
                        barBackgroundColor='white'
                    />
                </section>
            }

            { temperatures.length === 0 &&
                <p> No disponemos de los datos de temperatura en este momento.</p>
            }
        </React.Fragment>
    )
}