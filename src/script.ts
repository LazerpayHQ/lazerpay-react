import { useState, useEffect } from 'react'
import useCdn from './useCdn'

const cachedScripts: string[] = []
interface IScriptResult {
  loaded: boolean
  error: boolean
}

export default function useLazerpayScript(): boolean[] {
  const [cdn, handleCdn] = useCdn()
  const src = 'https://js.lazerpay.finance/v1/index.min.js'

  const [state, setState] = useState<IScriptResult>({
    loaded: false,
    error: false
  })

  const cdnUrl = localStorage.getItem('lazerpay-cdn')

  useEffect(() => {
    handleCdn(cdnUrl || src)
  }, [cdnUrl])

  useEffect((): any => {
    if (cdn) {
      if (cachedScripts.includes(cdn)) {
        setState({
          loaded: true,
          error: false
        })
      } else {
        cachedScripts.push(cdn)

        const script = document.createElement('script')
        script.src = cdn
        script.async = true

        const onScriptLoad = (): void => {
          setState({
            loaded: true,
            error: false
          })
        }

        const onScriptError = (): void => {
          const index = cachedScripts.indexOf(cdn)
          if (index >= 0) cachedScripts.splice(index, 1)
          script.remove()

          setState({
            loaded: true,
            error: true
          })
        }

        script.addEventListener('load', onScriptLoad)
        script.addEventListener('complete', onScriptLoad)
        script.addEventListener('error', onScriptError)

        document.body.appendChild(script)

        return (): void => {
          script.removeEventListener('load', onScriptLoad)
          script.removeEventListener('error', onScriptError)
        }
      }
    }
  }, [cdn])

  return [state.loaded, state.error]
}
