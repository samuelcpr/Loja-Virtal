import { NavLink } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 70rem;

  ${down('lg')} {
    max-width: 100%;
    padding: 2rem;
  }

  ${down('md')} {
    max-width: 100%;
    padding: 2rem;
  }

  ${down('sm')} {
    max-width: 100%;
    padding: 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['purple-300']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    font-size: ${(props) => props.theme['text-3']};
    color: ${(props) => props.theme['purple-700']};
  }
`

export const NavLinkContainer = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-300']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 99999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: ${(props) => props.theme['text-2']};
  }
`
