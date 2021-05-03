import React, { Fragment } from 'react'
import AllPayments from '../components/payments/Payments'

export const Payments: React.FC = () => {
  return (
    <Fragment>
      <h1>Retrieve the history of payments</h1>
      <AllPayments />
    </Fragment>
  )
}
