import DeliverySvg from 'assets/delivery.svg'
import { ConfirmedPageSection, ImageContainer, InfoContainer } from './styles'
import { BulletWithIcon } from 'layouts/DefaultLayout/styles'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useCartStore } from 'store/cart'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'

const PAYMENT = {
  debit: 'Débito',
  credit: 'Crédito',
  money: 'Dinheiro',
}

export function ConfirmedPage() {
  const { confirmedBill, cleanupCart } = useCartStore(
    ({ confirmedBill, cleanupCart }) => ({ confirmedBill, cleanupCart }),
    shallow,
  )

  useEffect(() => {
    cleanupCart()
  }, [cleanupCart])

  return (
    <ConfirmedPageSection>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <InfoContainer>
          <ul>
            <BulletWithIcon color="purple">
              <div>
                <MapPin weight="fill" />
              </div>
              <span>
                Entrega em{' '}
                <b>
                  {confirmedBill.street}{' '}
                  {confirmedBill.number ? `,${confirmedBill.number}` : ``}
                </b>{' '}
                <br />
                {confirmedBill.neighborhood} - {confirmedBill.city},{' '}
                {confirmedBill.estate}
              </span>
            </BulletWithIcon>
            <BulletWithIcon color="lightYellow">
              <div>
                <Clock weight="fill" />
              </div>
              <span>
                Previsão de entrega <br /> <b>20 min - 30 min</b>
              </span>
            </BulletWithIcon>
            <BulletWithIcon color="yellow">
              <div>
                <CurrencyDollar />
              </div>
              <span>
                Pagamento na entrega <br />
                <b>{PAYMENT[confirmedBill.payment]}</b>
              </span>
            </BulletWithIcon>
          </ul>
        </InfoContainer>
      </div>
      <ImageContainer>
        <img src={DeliverySvg} alt="" />
      </ImageContainer>
    </ConfirmedPageSection>
  )
}
