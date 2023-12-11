import { ShoppingCartSimple } from 'phosphor-react'
import {
  AddShoppingCartButton,
  CardContainer,
  ContainerTags,
  QuantityForm,
} from './styles'
import { Coffee } from 'interfaces/coffee'
import { priceFormater } from 'lib/priceFormater'
import { useCartStore } from 'store/cart'
import { useState } from 'react'

type CoffeeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formatedPrice = priceFormater(coffee.price)
  const addItemToCart = useCartStore((state) => state.addItemToCart)
  const [quantity, setQuantity] = useState<number>(1)

  function addQuantity() {
    setQuantity(quantity + 1)
  }

  function removeQuantity() {
    if (quantity === 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  }

  return (
    <CardContainer>
      <img src={`${coffee.img}`} alt={`Imagem a bebida ${coffee.title}`} />
      <ContainerTags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.title}-${tag}`}>{tag}</span>
        ))}
      </ContainerTags>
      <h4>{coffee.title}</h4>
      <p>{coffee.description}</p>
      <footer>
        <span>
          <b>{formatedPrice}</b>
        </span>
        <QuantityForm>
          <button onClick={addQuantity}>+</button>
          <input type="number" name="quantity" value={quantity} readOnly />
          <button onClick={removeQuantity}>-</button>
        </QuantityForm>
        <AddShoppingCartButton
          onClick={() => addItemToCart({ ...coffee, quantity })}
        >
          <ShoppingCartSimple size={18} weight="fill" color="#ffffff" />
        </AddShoppingCartButton>
      </footer>
    </CardContainer>
  )
}
