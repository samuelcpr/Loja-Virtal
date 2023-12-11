/* eslint-disable no-undef */
/* eslint-env browser */

import { useEffect, useState } from 'react'

type Location = {
  latitude: number
  longitude: number
}

const useCurrentLocation = (options = {}) => {
  // store location in state
  const [location, setLocation] = useState<Location>({} as Location)
  // store error message in state
  const [error, setError] = useState<string>('')

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error: GeolocationPositionError) => {
    setError(error.message)
  }

  useEffect(() => {
    const { geolocation } = navigator

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    // Call Geolocation API
    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])

  return { location, error }
}

export default useCurrentLocation
