import styled from 'styled-components'
import heroBg from 'assets/hero-bg.png'
import { down } from 'styled-breakpoints'

export const HomeContainer = styled.div`
  width: 100%;
`

export const HeroSection = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
`

export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 0 6.75rem;
  gap: 3.5rem;
  max-width: 70rem;
  margin: 0 auto;

  ${down('lg')} {
    max-width: 100%;
    padding: 0 2rem;
    flex-direction: column;
  }

  ${down('md')} {
    max-width: 100%;
    padding: 0 2rem;
    flex-direction: column;
  }

  ${down('sm')} {
    max-width: 100%;
    padding: 0 2rem;
    flex-direction: column;
  }
`

export const HeroTitle = styled.h1`
  font-size: ${(props) => props.theme['text-9']};
  line-height: 130%;
  font-weight: 800;
  margin-bottom: 1rem;
`

export const HeroImageContainer = styled.div`
  display: block;
  width: 29.75rem;
  height: 22.5rem;

  ${down('lg')} {
    width: 100%;
    padding: 0 2rem;
  }

  ${down('md')} {
    width: 100%;
    padding: 0 2rem;
  }

  ${down('sm')} {
    width: 100%;
    padding: 0 2rem;
  }

  img {
    display: block;
    width: auto;
    height: 100%;

    ${down('lg')} {
      width: 75%;
      height: auto;
      margin: 0 auto;
    }

    ${down('sm')} {
      width: 100%;
      height: auto;
    }
  }
`

export const HeroText = styled.p`
  font-size: ${(props) => props.theme['text-6']};
  line-height: 130%;
  margin-bottom: 4.125rem;
`

export const BuyerInfos = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  list-style: none;

  ${down('sm')} {
    grid-template-columns: auto;
  }
`

export const CoffeesSection = styled.section`
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font-size: ${(props) => props.theme['text-8']};
    line-height: 130%;
    color: ${(props) => props.theme['base-700']};
    margin-bottom: 3.375rem;
  }

  ${down('lg')} {
    max-width: 100%;
    padding: 0 2rem;
  }

  ${down('md')} {
    max-width: 100%;
    padding: 0 2rem;
  }

  ${down('sm')} {
    max-width: 100%;
    padding: 0 2rem;
  }
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  ${down('lg')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${down('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`
