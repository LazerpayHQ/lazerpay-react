/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { PaymentProps } from './@types/index'
import useScript from './script'
import { callLazerpayPop } from './actions/lazerpay-actions'

export default function useLazerpayPayment(options: PaymentProps) {
  const [scriptLoaded, scriptError] = useScript()

  const {
    publicKey,
    customerName,
    customerEmail,
    currency,
    businessLogo,
    reference,
    acceptPartialPayment,
    amount,
    paymentLinkId,
    paymentButtonId,
    metadata,
    cdnUrl,
    onError,
    onSuccess,
    onClose
  } = options

  function initializePayment(): void {
    if (scriptError) {
      throw new Error('Unable to load Lazerpay inline script')
    }

    if (scriptLoaded) {
      const LazerpayArgs = {
        publicKey,
        customerName,
        customerEmail,
        currency,
        businessLogo,
        reference,
        acceptPartialPayment,
        amount,
        paymentLinkId,
        paymentButtonId,
        metadata,
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

  useEffect(() => {
    if (cdnUrl) {
      localStorage.setItem('lazerpay-cdn', cdnUrl)
    } else localStorage.removeItem('lazerpay-cdn')
  }, [cdnUrl])

  return initializePayment
}
