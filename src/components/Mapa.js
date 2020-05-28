import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

export function Mapa(cardinals, weather) {

    const north = cardinals.cardinals.cardinals.north
    const south = cardinals.cardinals.cardinals.south;
    const east = cardinals.cardinals.cardinals.east;
    const west = cardinals.cardinals.cardinals.west;

    const tiempo = cardinals.weather;

    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
                <section>
                    <Map 
                        bounds={[
                            [south, west],
                            [north, east]
                        ]}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {tiempo.map((station) => (
                            <Marker
                                position={[station.lat, station.lng]}
                            >
                                <Popup>
                                    {`${station.stationName}: ${station.temperature}ºC`}
                                </Popup>
                            </Marker>
                        ))}

                    </Map>
                </section>
        </React.Fragment>
    )
}