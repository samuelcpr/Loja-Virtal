import { Coffee } from '../interfaces/coffee'
import { create } from 'zustand'
// @ts-ignore
import { coffees } from '../../data.json'

type CoffeeStore = {
  coffees: Coffee[]
}

export const useCoffeeStore = create<CoffeeStore>(() => ({
  coffees: coffees as Coffee[],
}))
