import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  BasicInput,
  CheckoutCard,
  CheckoutCardInformation,
  CheckoutContainer,
  FormContainer,
  PaymentMethods,
} from './styles'

import { CheckoutCardComponent } from './components/CheckoutCardComponent'
import { checkoutSchema, CheckoutSchemaType } from 'lib/checkoutSchema'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from 'store/cart'
import { useEffect } from 'react'
import { useCoffeeStore } from 'store/coffee'
import { shallow } from 'zustand/shallow'
import { maskCEP } from 'lib/masks'

export function CheckoutPage() {
  const { quantity, setConfirmedBill } = useCartStore(
    ({ cartResume, setConfirmedBill }) => ({
      quantity: cartResume.quantity,
      setConfirmedBill,
    }),
    shallow,
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (quantity < 1) {
      navigate('/')
    }
  }, [quantity, navigate])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<CheckoutSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      estate: '',
      neighborhood: '',
      number: '',
      street: '',
      payment: 'credit',
    },
  })

  watch()

  function submitCoffeeDelivery(data: CheckoutSchemaType) {
    setConfirmedBill(data)
    navigate('/confirmed')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(submitCoffeeDelivery)}>
        <div>
          <h1>Complete seu pedido</h1>
          <CheckoutCard mb="0.75rem">
            <CheckoutCardInformation>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <small>Informe o endereço onde deseja receber seu pedido</small>
              </div>
            </CheckoutCardInformation>
            <FormContainer>
              <BasicInput
                w="35%"
                placeholder="CEP"
                {...register('cep')}
                hasError={!!errors.cep}
                onChange={(event) => {
                  event.target.value = maskCEP(event.target.value)
                }}
              />
              <BasicInput
                w="100%"
                placeholder="Rua"
                {...register('street')}
                hasError={!!errors.street}
              />
              <div>
                <BasicInput
                  w="35%"
                  placeholder="Número"
                  {...register('number')}
                  hasError={!!errors.number}
                />
                <BasicInput
                  w="65%"
                  placeholder="Complemento"
                  {...register('complement')}
                  hasError={!!errors.complement}
                />
              </div>
              <div>
                <BasicInput
                  w="35%"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  hasError={!!errors.neighborhood}
                />
                <BasicInput
                  w="48%"
                  placeholder="Cidade"
                  {...register('city')}
                  hasError={!!errors.city}
                />
                <BasicInput
                  w="15%"
                  placeholder="UF"
                  {...register('estate')}
                  hasError={!!errors.estate}
                />
              </div>
            </FormContainer>
          </CheckoutCard>
          <CheckoutCard>
            <CheckoutCardInformation>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <small>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </small>
              </div>
            </CheckoutCardInformation>
            <PaymentMethods>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="credit"
                  id="credit"
                />
                <label htmlFor="credit">
                  <CreditCard size={22} color="#8047F8" />
                  Cartão de crédito
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="debit"
                  id="debit"
                />
                <label htmlFor="debit">
                  <Bank size={22} color="#8047F8" />
                  Cartão de débito
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="money"
                  id="money"
                />
                <label htmlFor="money">
                  <Money size={22} color="#8047F8" />
                  Dinheiro
                </label>
              </div>
            </PaymentMethods>
          </CheckoutCard>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CheckoutCardComponent isDirty={isDirty} isValid={isValid} />
        </div>
      </form>
    </CheckoutContainer>
  )
}
