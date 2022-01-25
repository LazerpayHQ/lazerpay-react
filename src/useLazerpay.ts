/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'

type LazerFuncs = {
  setup: () => void
  open: () => void
}
export interface LazerpayProps {
  payment: (config: PaymentProps) => LazerFuncs
}
declare const window: Window &
  typeof globalThis & {
    Lazerpay: LazerpayProps
  }
const useLazerpay = (options: PaymentProps) => {
  const [loaded, error] = useScript()
  useEffect(() => {
    if (error) throw new Error('Unable to load lazerpay modal')
  }, [error])

  const initializePayment = () => {
    if (error) throw new Error('Unable to load lazerpay checkout modal')
    if (loaded) {
      const checkout = window.Lazerpay && window.Lazerpay.payment(options)
      checkout.setup()
      return checkout.open()
    }
  }
  return initializePayment
}
export default useLazerpay
