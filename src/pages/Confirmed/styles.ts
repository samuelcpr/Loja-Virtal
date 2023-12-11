import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const ConfirmedPageSection = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  ${down('lg')} {
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
  }

  ${down('md')} {
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
  }

  ${down('sm')} {
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
  }

  & > div {
    h1 {
      color: ${(props) => props.theme['yellow-700']};
      margin-bottom: 0.25rem;
      font-size: ${(props) => props.theme['text-8']};
    }
  }
`
export const InfoContainer = styled.div`
  display: flex;
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;
  margin-top: 2.5rem;
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px;

  ${down('lg')} {
    padding: 1.5rem 1rem;
  }

  ${down('md')} {
    padding: 1.5rem 1rem;
  }

  ${down('sm')} {
    padding: 1.5rem 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const ImageContainer = styled.div`
  height: 293px;
  width: 493px;
  margin-top: 5rem;

  ${down('lg')} {
    width: 100%;
  }

  ${down('md')} {
    width: 100%;
  }

  ${down('sm')} {
    width: 100%;
  }

  img {
    display: block;
  }
`
