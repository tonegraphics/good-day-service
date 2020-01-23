import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { useMediaQuery } from '@material-ui/core'

export const MapContainer = props => {
  const { google } = props
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const style = {
    width: isDesktop ? 960 : 'calc(100vw - 48px)',
    height: isDesktop ? 520 : 320,
    position: 'relative',
  }

  return (
    <div style={style}>
      <Map
        google={google}
        zoom={isDesktop ? 15 : 14}
        initialCenter={{
          lat: 33.65617,
          lng: 130.70745,
        }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name="グッドデイサービス"
          position={{ lat: 33.65509, lng: 130.71451 }}
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAP_API_KEY,
  language: 'jp',
})(MapContainer)
