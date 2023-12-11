import { down } from 'styled-breakpoints'
import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.section`
  form {
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 2rem;

    ${down('lg')} {
      grid-template-columns: 1fr;
      max-width: 100%;
      padding: 0 2rem;
    }

    ${down('md')} {
      grid-template-columns: 1fr;
      max-width: 100%;
      padding: 0 2rem;
    }

    ${down('sm')} {
      grid-template-columns: 1fr;
      max-width: 100%;
      padding: 0 2rem;
    }

    h1,
    h2 {
      font-size: ${(props) => props.theme['text-5']};
      line-height: 1.3;
      margin-bottom: 0.9375rem;
    }
  }
`

type CheckoutCardProps = {
  mb?: string | number
  confirmCard?: boolean
}

export const CheckoutCard = styled.div<CheckoutCardProps>`
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px;
  padding: 2.5rem;

  ${down('lg')} {
    margin-bottom: 1.25rem;
  }

  ${down('md')} {
    margin-bottom: 1.25rem;
  }

  ${down('sm')} {
    margin-bottom: 1.25rem;
  }

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

  ${(props) =>
    props.confirmCard &&
    css`
      border-radius: 6px 44px;
    `}
`

export const CheckoutCardInformation = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    span {
      color: ${(props) => props.theme['base-700']};
      font-weight: 400;
      font-size: ${(props) => props.theme['text-4']};
      line-height: 1.3;
    }

    small {
      color: ${(props) => props.theme['base-600']};
      font-weight: 400;
      font-size: ${(props) => props.theme['text-3']};
      line-height: 1.3;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;

    ${down('lg')} {
      flex-direction: column;
    }

    ${down('md')} {
      flex-direction: column;
    }

    ${down('sm')} {
      flex-direction: column;
    }
  }
`

type BasicInputProps = {
  w: string | number
  hasError?: boolean
}

export const BasicInput = styled.input<BasicInputProps>`
  width: ${(props) => props.w};
  border: ${(props) => `1px solid ${props.theme['base-300']}`};
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-200']};
  font-size: ${(props) => props.theme['text-3']};
  line-height: 1.3;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #ef4444;
    `}

  &::placeholder {
    color: ${(props) => props.theme['base-500']};
  }

  ${down('lg')} {
    width: 100%;
  }

  ${down('md')} {
    width: 100%;
  }

  ${down('sm')} {
    width: 100%;
  }
`

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  ${down('lg')} {
    grid-template-columns: 1fr;
  }

  ${down('md')} {
    grid-template-columns: 1fr;
  }

  ${down('sm')} {
    grid-template-columns: 1fr;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    border: ${(props) => `1px solid ${props.theme['purple-500']}`};
    background-color: ${(props) => props.theme['purple-300']};
    padding: 0.9375rem;
  }

  div label {
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 0.75rem;
    font-size: ${(props) => props.theme['text-2']};
    line-height: 1.6;
    background: ${(props) => props.theme['base-300']};
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.1s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['base-400']};
    }

    svg {
      font-size: 1.375rem;
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme['base-300']};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const CartItemForm = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    padding: 0 0.5rem;
    background-color: ${(props) => props.theme['base-300']};
    border-radius: 6px;
    border: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-400']};
    }

    svg {
      margin-right: 0.25rem;
      color: ${(props) => props.theme['purple-700']};
    }
  }
`

export const QuantityForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-300']};
  height: 2rem;
  width: 4.5rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  font-size: 1rem;

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
    width: 0.875rem;
    height: 0.875rem;
    font-size: 0.75rem;
    color: ${(porps) => porps.theme['purple-500']};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme['purple-700']};
    }

    &:first-of-type {
      margin-left: 0.5rem;
    }

    &:last-of-type {
      margin-right: 0.5rem;
    }
  }
`

export const CartItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span,
  b {
    font-size: 1rem;
  }
`

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    margin-bottom: 0.875rem;

    &:last-of-type {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
  }

  button {
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-500']};
    border: none;
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    text-align: center;
    padding: 0.75rem 0;
    font-weight: 700;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['yellow-700']};
    }

    &:disabled {
      background-color: ${(props) => props.theme['base-400']};
      cursor: not-allowed;
    }
  }
`
