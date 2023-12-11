import { Trash } from 'phosphor-react'
import { Coffee } from 'interfaces/coffee'
import { priceFormater } from 'lib/priceFormater'
import { CartItem, CartItemForm, CartItemTitle, QuantityForm } from '../styles'
import { useCartStore } from 'store/cart'
import { shallow } from 'zustand/shallow'

type CheckoutCartItemProps = Pick<Coffee, 'img' | 'title' | 'price' | 'id'> & {
  quantity: number
}

export function CheckoutCartItem({
  img,
  title,
  price,
  quantity,
  id,
}: CheckoutCartItemProps) {
  const { removeItemFromCart, addItemQuantity, decreaseItemQuantity } =
    useCartStore(
      ({ removeItemFromCart, addItemQuantity, decreaseItemQuantity }) => ({
        removeItemFromCart,
        addItemQuantity,
        decreaseItemQuantity,
      }),
      shallow,
    )

  return (
    <CartItem>
      <img src={img} alt="" />
      <div>
        <CartItemTitle>
          <span>{title}</span>
          <b>{priceFormater(price)}</b>
        </CartItemTitle>
        <CartItemForm>
          <QuantityForm>
            <button role="button" onClick={() => addItemQuantity(id)}>
              +
            </button>
            <input type="number" name="quantity" value={quantity} readOnly />
            <button role="button" onClick={() => decreaseItemQuantity(id)}>
              -
            </button>
          </QuantityForm>
          <button onClick={() => removeItemFromCart(id)}>
            <Trash /> Remover
          </button>
        </CartItemForm>
      </div>
    </CartItem>
  )
}
