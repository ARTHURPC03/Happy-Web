import React from 'react'

import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import { PageMap, CreateOrphanage } from './styles'

import mapMarkerImg from '../../images/mapMarker.svg'

import 'leaflet/dist/leaflet.css'

const OrphanagesMap: React.FC = () => {
  return (
    <PageMap>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Serra</strong>
          <span>Espírito Santo</span>
        </footer>
      </aside>

      <Map
        center={[-20.1291006, -40.3119974]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </PageMap>
  )
}

export default OrphanagesMap
