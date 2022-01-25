export const callLazerpayPop = (LazerpayArgs: any): void => {
  console.log(LazerpayArgs, 'arg')
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
      onClose: LazerpayArgs.onClose(),
      onSuccess: LazerpayArgs.onSuccess(),
      onError: LazerpayArgs.onError()
    })
  )
}
