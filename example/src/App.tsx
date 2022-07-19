import React from 'react'

import { useLazerpay } from './dist/index'

const App = () => {
  const config = {
    publicKey: 'pk_live_0N24k7lsrr7NGfrDQpIjPGy9z61LkXjUqxX3r99XblXHemwMht',
    customerName: 'Njoku Emmanuel',
    customerEmail: 'kalunjoku123@gmail.com',
    currency: 'USD',
    reference: '90opjjjjhp9',
    amount: '5',
    acceptPartialPayment: true,
    businessLogo:
      'https://pbs.twimg.com/profile_images/1463770588921618442/_jAzCZFA_400x400.jpg',
    onSuccess: (data: any) => {
      console.log(data, 'success data')
    },
    onClose: () => {
      console.log('closed')
    },
    onError: (data: any) => {
      console.error(data)
    },
    metadata: { 'hi man': 'hello girl' }
  }

  const initializePayment = useLazerpay(config)

  return (
    <div>
      <h1>Lazerpay React test</h1>
      <button onClick={initializePayment}>Pay with Lazerpay</button>
    </div>
  )
}

export default App
