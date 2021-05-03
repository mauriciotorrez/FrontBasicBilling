import React, { Fragment } from 'react'
import PayBill from '../components/paybill/Paybill'

export const Paybills: React.FC = () => {
  return (
    <Fragment>
      <h1>Pay a specific bill</h1>
      <PayBill />
    </Fragment>
  )
}
