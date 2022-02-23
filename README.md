# Lazerpay Official react sdk

Lazerpay SDK allows you accept payments easily in your react application

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-1.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-2.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-3.png" alt='screenshot of SDK'  />

<img src="https://raw.githubusercontent.com/njokuScript/screenshots/master/react-4.png" alt='screenshot of SDK'  />

## Installation

```sh
npm install lazerpay-react
```

## Usage

```js
import { useLazerpay } from 'lazerpay-react'

const App = () => {
  config = {
    publicKey: 'PUBLIC_KEY',
    customerName: 'CUSTOMERS FULL NAME',
    customerEmail: 'CUSTOMER EMAIL',
    currency: 'CURRENCY', // USD, NGN, AED, GBP, EUR
    amount: '10', // amount as a number or string
    reference: 'XUASO90120', // unique identifier
    acceptPartialPayment: true,
    onSuccess: (response) => {
      // handle response here
    },
    onClose: () => {
      //handle response here
    },
    onError: (response) => {
      // handle responsne here
    }
  }

  const initializePayment = useLazerpay(config)

  return (
    <div>
      <h1>Lazerpay React test App</h1>
      <button onClick={initializePayment}>Pay with Lazerpay</button>
    </div>
  )
}
```
**string: NOTE**
`reference` has to be updated after a successful partial payment to enable re-initialization.

## Configuration Options

- [`publicKey`](#publicKey)
- [`customerName`](#customerName)
- [`customerEmail`](#customerEmail)
- [`currency`](#currency)
- [`amount`](#amount)
- [`reference`](#reference)
- [`onSuccess`](#onSuccess)
- [`onError`](#onError)
- [`onClose`](#onClose)

### <a name="publicKey"></a> `publicKey`

**string: Required**
Your public key can be found on your [dashboard](https://beta.lazerpay.finance) settings.

### <a name="customerName"></a> `customerName`

**string: Required**
The name of the customer trying to make payments

### <a name="customerEmail"></a> `customerEmail`

**string: Required**
The email of the customer trying to make payments

### <a name="currency"></a> `currency`

**string: Required**
The name of the fiat currency the merchant accepts

### <a name="amount"></a> `amount`

**number | string: Required**
The amount you want to charge the user in `currency`

### <a name="reference"></a> `reference`

**string : Optional**
a unique string used to identifier the user

### <a name="acceptPartialPayment"></a> `acceptPartialPayment`

**string : Optional**
This is used to enforce complete payments

### <a name="businessLogo"></a> `businessLogo`

**string: Required**
The logo of your business as url in string

### <a name="onSuccess"></a> `onSuccess`

**(response) => { Void }: Required**
This is called when a transaction is successfully. It returns a response.

### <a name="onError"></a> `onError `

**(response) => { Void }: Required**
This is called when a transaction fails. It returns a response.

<!-- See the [event details](#lazerpayEvent) below. -->

### <a name="onClose"></a> `onClose `

**() => { Void }: Required**
This is called when a user clicks on the close button.

The Transaction JSON returned for successful events

```ts
{
  "event": "successful",
  "data": {
    "id": "12896b32-0d7d-4744-bc15-5960af40d519",
    "reference": "aa6KlHy88D",
    "acceptPartialPayment":true,
    "senderAddress": "0x0B4d358D349809037003F96A3593ff9015E89efA",
    "recipientAddress": "0x785F44E779cfEeDeBf7aA7CFde19DaA3312fd19e",
    "actualAmount": 10,
    "amountPaid": 10,
    "fiatAmount": 10,
    "coin": "BUSD",
    "currency": "USD",
    "hash": "0x3332d7b046d53e90dc0337c715252f210386c2a471c5025c953a0b1d9bc90593",
    "blockNumber": 14160827,
    "type": "received",
    "status": "confirmed",
    "network": "mainnet",
    "blockchain": "Binance Smart Chain",
    "customer": {
      "id": "b847dbbd-e5a4-4afc-ba26-b292707dc391",
      "customerName": "Njoku Emmanuel",
      "customerEmail": "kalunjoku123@gmail.com",
      "customerPhone": null,
      "network": "mainnet"
    }
  }
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Support

If you're having trouble with Lazerpay React Native SDK or your integration, please reach out to us at <help@lazerpay.finance> or come chat with us on Slack. We're more than happy to help you out.

## License

MIT
