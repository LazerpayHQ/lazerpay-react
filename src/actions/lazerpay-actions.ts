export const callLazerpayPop = (LazerpayArgs: any): void => {
  // @ts-ignore
  return (
    // @ts-ignore
    window.LazerCheckout &&
    // @ts-ignore
    window.LazerCheckout({
      name: LazerpayArgs.customerName,
      email: LazerpayArgs.customerEmail,
      amount: LazerpayArgs.amount,
      key: LazerpayArgs.publicKey,
      logo: LazerpayArgs.businessLogo || '',
      currency: LazerpayArgs.currency || '',
      reference: LazerpayArgs.reference || '',
      acceptPartialPayment: LazerpayArgs.acceptPartialPayment,
      paymentLinkId: LazerpayArgs.paymentLinkId || '',
      paymentButtonId: LazerpayArgs.paymentButtonId || '',
      metadata: LazerpayArgs.metadata || {},
      onClose: LazerpayArgs.onClose,
      onSuccess: LazerpayArgs.onSuccess,
      onError: LazerpayArgs.onError
    })
  )
}
