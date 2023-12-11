import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1.25rem;
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -2.75rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    text-align: center;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-700']};
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['base-500']};
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 2.0625rem;
  }

  footer {
    display: flex;
    align-items: center;

    span {
      margin-right: 1.4375rem;
      display: flex;
      font-size: 0.875rem;
      font-weight: 400;

      b {
        font-family: ${(props) => props.theme.baloo};
        font-size: 1.5rem;
        font-weight: 800;
        margin-left: 0.5rem;
      }
    }
  }
`

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1.25rem;

  span {
    display: inline-block;
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    border-radius: 20px;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const QuantityForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-300']};
  height: 2.375rem;
  width: 4.5rem;
  margin-right: 0.5rem;
  border-radius: 6px;

  input,
  button {
    background: none;
    border: none;
  }

  input {
    width: 2rem;
    text-align: center;
  }

  button {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    color: ${(porps) => porps.theme['purple-500']};
    transition: all 0.1s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['base-700']};
    }

    &:first-of-type {
      margin-left: 0.5rem;
    }

    &:last-of-type {
      margin-right: 0.5rem;
    }
  }
`

export const AddShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.375rem;
  border: none;
  background-color: ${(props) => props.theme['purple-700']};
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
