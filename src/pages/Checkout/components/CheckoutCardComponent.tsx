import { shallow } from 'zustand/shallow'
import { useCartStore } from 'store/cart'
import { CheckoutCard, CheckoutInfo } from '../styles'
import { CheckoutCartItem } from './CheckoutCartItem'
import { priceFormater } from 'lib/priceFormater'

export function CheckoutCardComponent({
  isDirty,
  isValid,
}: {
  isDirty: boolean
  isValid: boolean
}) {
  const { cart, cartResume } = useCartStore(
    (state) => ({ cart: state.cart, cartResume: state.cartResume }),
    shallow,
  )

  const cartResumeToDisplay = {
    totalPrice: priceFormater(cartResume.totalPrice),
    deliverPrice: priceFormater(cartResume.deliverPrice),
    totalWithDeliver: priceFormater(
      cartResume.totalPrice + cartResume.deliverPrice,
    ),
  }

  return (
    <CheckoutCard confirmCard>
      {cart.map((item) => (
        <CheckoutCartItem
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
        />
      ))}
      <CheckoutInfo>
        <div>
          <span>Total de itens</span>
          <span>{cartResumeToDisplay.totalPrice}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{cartResumeToDisplay.deliverPrice}</span>
        </div>
        <div>
          <span>Total </span>
          <span>{cartResumeToDisplay.totalWithDeliver}</span>
        </div>
        <button type="submit" disabled={!isDirty || !isValid}>
          Confirmar pedido
        </button>
      </CheckoutInfo>
    </CheckoutCard>
  )
}
