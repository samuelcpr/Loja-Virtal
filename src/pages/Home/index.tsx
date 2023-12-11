import HeroImg from 'assets/hero.png'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { useCoffeeStore } from 'store/coffee'
import { CoffeeCard } from './components/CoffeeCard'
import {
  HeroTitle,
  HomeContainer,
  HeroText,
  HeroImageContainer,
  HeroSection,
  HeroInfo,
  BuyerInfos,
  CoffeesSection,
  CoffeesList,
} from './styles'
import { BulletWithIcon } from 'layouts/DefaultLayout/styles'

export function HomePage() {
  const coffees = useCoffeeStore((state) => state.coffees)

  return (
    <HomeContainer>
      <HeroSection>
        <HeroInfo>
          <div>
            <HeroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>
            <HeroText>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeroText>
            <BuyerInfos>
              <BulletWithIcon color="yellow">
                <div>
                  <ShoppingCartSimple weight="fill" size={16} />
                </div>
                <span>Compra simples e segura</span>
              </BulletWithIcon>
              <BulletWithIcon color="base">
                <div>
                  <Package weight="fill" size={16} />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </BulletWithIcon>
              <BulletWithIcon color="lightYellow">
                <div>
                  <Timer weight="fill" size={16} />
                </div>
                <span>Entrega rápida e rastreada</span>
              </BulletWithIcon>
              <BulletWithIcon color="purple">
                <div>
                  <Coffee weight="fill" size={16} />
                </div>
                <span>O café chega fresquinho até você</span>
              </BulletWithIcon>
            </BuyerInfos>
          </div>
          <HeroImageContainer>
            <img src={HeroImg} alt="" />
          </HeroImageContainer>
        </HeroInfo>
      </HeroSection>
      <CoffeesSection>
        <h2>Nossos cafés</h2>
        <CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesList>
      </CoffeesSection>
    </HomeContainer>
  )
}
