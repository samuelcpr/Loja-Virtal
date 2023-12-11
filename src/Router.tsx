import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'
import { HomePage } from 'pages/Home'
import { CheckoutPage } from 'pages/Checkout'
import { ConfirmedPage } from 'pages/Confirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
      </Route>
    </Routes>
  )
}
