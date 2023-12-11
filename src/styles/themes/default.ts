import { createTheme } from 'styled-breakpoints'

/**
 * Theme tokens
 */
const breakpoints = createTheme({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
} as const)

export const defaultTheme = {
  'yellow-700': '#c47f17',
  'yellow-500': '#dbac2c',
  'yellow-300': '#f1e9c9',

  'purple-700': '#4b2995',
  'purple-500': '#8047f8',
  'purple-300': '#ebe5f9',

  'base-800': '#272221', // #272221
  'base-700': '#403937',
  'base-600': '#574f4d',
  'base-500': '#8d8686',
  'base-400': '#d7d5d5',
  'base-300': '#e6e5e5',
  'base-200': '#eeeded',
  'base-100': '#f3f2f2',

  background: '#fafafa',
  white: '#ffffff',

  'text-1': '0.625rem',
  'text-2': '0.75rem',
  'text-3': '0.875rem',
  'text-4': '1rem',
  'text-5': '1.125rem',
  'text-6': '1.25rem',
  'text-7': '1.5rem',
  'text-8': '2rem',
  'text-9': '3rem',

  robot: "font-family: 'Roboto', sans-serif",
  baloo: "'Baloo 2', cursive",
  ...breakpoints,
} as const
