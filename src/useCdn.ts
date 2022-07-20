import { useState } from 'react'

export default function useCdn(): [string, (cdn: string) => void] {
  const [cdn, setCdn] = useState<string>('')

  const handleCdn = (cdn: string) => {
    setCdn(cdn)
  }

  return [cdn, handleCdn]
}
