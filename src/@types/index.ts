export type PaymentProps = {
  publicKey: string
  customerName?: string
  customerEmail: string
  currency: string
  amount: number | string
  businessLogo?: string
  userReference?: string
  onError: (event: string) => void
  onSuccess: (event: string) => void
  onClose: () => void
}
