import { useState } from 'react'

export default function useCdn(): [string, (cdn: string) => void] {
  // const src = 'https://js.lazerpay.finance/v1/index.min.js'

  const [cdn, setCdn] = useState<string>('')

  const handleCdn = (cdn: string) => {
    setCdn(cdn)
  }

  return [cdn, handleCdn]
}
