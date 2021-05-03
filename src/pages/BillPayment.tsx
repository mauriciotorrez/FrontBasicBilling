import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import Billpayment from '../components/billpayment/Billpayment'

export const BillPayment: React.FC = () => {
  const history = useHistory()

  return (
    <Fragment>
      <h1>Perform a bill payment</h1>

      <Billpayment/>

    </Fragment>
  )
}
