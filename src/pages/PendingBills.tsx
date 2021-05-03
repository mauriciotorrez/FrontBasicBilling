import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import PendingBill from '../components/pendingbills/Pendingbills'

export const PendingBills: React.FC = () => {
  const history = useHistory()

  return (
    <Fragment>
      <h1>Retrieve pending bills per Client</h1>

      <PendingBill/>

    </Fragment>
  )
}
