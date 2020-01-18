import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
// import { useMediaQuery } from '@material-ui/core'

export const MapContainer = props => {
  const { google } = props
  // const isDesktop = useMediaQuery('(min-width: 1024px)')
  // const style = {
  //   width: isDesktop ? 960 : 'calc(100vw - 64px)',
  //   height: isDesktop ? 520 : 240,
  // }

  return (
    <Map
      style={{ width: 960, height: 520, position: 'relative' }}
      google={google}
      zoom={15}
      center={{
        lat: 33.65617,
        lng: 130.70746,
      }}
    >
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name="グッドデイサービス"
        position={{ lat: 33.65509, lng: 130.71451 }}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDhemq5mgpHpaFvmdatgeI8mUBOuBHyCTs',
  language: 'jp',
  style: { width: 400 },
})(MapContainer)
