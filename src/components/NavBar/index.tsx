import Logo from 'assets/Logo.svg'
import { geolocationOptions } from 'constants/geolocationOptions'
import useCurrentLocation from 'hooks/useGeolocation'
import { getLocationFromApi } from 'lib/openweatherapi'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from 'store/cart'
import {
  InfoContainer,
  LocationContainer,
  NavBarContainer,
  NavLinkContainer,
} from './styles'

export function NavBar() {
  const { quantity } = useCartStore((state) => state.cartResume)
  const { location, error } = useCurrentLocation(geolocationOptions)
  const [region, setRegion] = useState<{ city: string; state: string }>({
    city: '',
    state: '',
  })

  useEffect(() => {
    async function getLocation() {
      if (location.latitude && location.longitude) {
        const { data } = await getLocationFromApi(
          location.latitude,
          location.longitude,
        )

        setRegion({ city: data[0].name, state: data[0].state })
      }
    }

    getLocation()
  }, [location])

  return (
    <NavBarContainer>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <InfoContainer>
          {region.city && region.state ? (
            <LocationContainer>
              <MapPin size={22} weight="fill" />
              <span>
                {region.city}, {region.state}
              </span>
            </LocationContainer>
          ) : null}
          <NavLinkContainer to="/checkout">
            <ShoppingCartSimple weight="fill" size={22} />
            {quantity > 0 ? <span>{quantity}</span> : null}
          </NavLinkContainer>
        </InfoContainer>
      </nav>
    </NavBarContainer>
  )
}
