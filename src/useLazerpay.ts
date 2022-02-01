/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'
import { callLazerpayPop } from './actions/lazerpay-actions'

export default function usePaystackPayment(options: PaymentProps) {
  const [scriptLoaded, scriptError] = useScript()
  const {
    publicKey,
    customerName,
    customerEmail,
    currency,
    businessLogo,
    reference,
    amount,
    onError,
    onSuccess,
    onClose
  } = options

  function initializePayment(): void {
    if (scriptError) {
      throw new Error('Unable to load paystack inline script')
    }

    if (scriptLoaded) {
      const LazerpayArgs = {
        publicKey,
        customerName,
        customerEmail,
        currency,
        businessLogo,
        reference,
        amount,
        onError,
        onSuccess,
        onClose
      }
      callLazerpayPop(LazerpayArgs)
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error('Unable to load lazerpay inline script')
    }
  }, [scriptError])

  return initializePayment
}
