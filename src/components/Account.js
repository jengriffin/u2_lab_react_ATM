import { useState } from 'react'
import '../styles/App.css'

const Account = (props) => {
  let [amount, setAmount] = useState('')
  let [balance, setBalance] = useState(0)

  const handleClick = (event) => {
    event.preventDefault()
    if (isNaN(amount) || amount <= 0) {
      console.log('Not a number')
    } else {
      setBalance(balance + Number(amount))
    }
    setAmount(0)
  }
  const withdraw = (event) => {
    event.preventDefault()
    if (isNaN(amount) || balance < amount || amount <= 0) {
      console.log('Not a number')
    } else {
      setBalance(balance - Number(amount))
    }
    setAmount(0)
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <br />
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <br />
        <br />
        <input
          className="btn"
          type="submit"
          value="Deposit"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="btn"
          type="submit"
          value="Withdraw"
          onClick={withdraw}
        />
      </div>
    </div>
  )
}

export default Account
