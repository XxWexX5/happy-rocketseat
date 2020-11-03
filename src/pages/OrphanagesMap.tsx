import React from 'react';

import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import { TileLayer, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import imageMapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside className="aside">
                <header className="header">
                    <img src={ imageMapMarker } alt="Imagem de marcação no mapa." />

                    <h2 className="title">Escolha um orfanato no mapa</h2>
                    <p className="text">Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer className="footer">
                    <strong className="title">Rio do Sul</strong>
                    <p className="text">Santa Catarina</p>
                </footer>
            </aside>
        
            <MapContainer 
                center={[ -23.5314183, -46.4489193 ]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFFFFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;