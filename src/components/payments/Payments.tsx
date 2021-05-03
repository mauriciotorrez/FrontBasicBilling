import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../features/payments'
import { fetchPayments } from '../../features/payments/types'

const Payments: React.FC = () => {

 const [category, setCategory] = useState("SEWER")
 const payments = useSelector(selectors.getPaymentsValue)
 const dispatch = useDispatch()

  return (

    <Fragment>
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title" data-qa="payment-category">Category:</span>
            <input className="card-title white-text" type='text' value={category} onChange={e => setCategory(e.target.value)}/>
            <div className="card-action">
            <div className="group">
              <button
                className="waves-effect waves-teal btn-flat blue"
                type="button"
                data-qa="fetch-payment"
                onClick={() =>
                  dispatch( fetchPayments(category)  )
                }
              >
                Search
              </button>

            </div>
          </div>

            <table>
              <thead>
                <tr>
                  <th>PAY ID</th>
                  <th>PERIOD</th>
                  <th>CATEGORY</th>
                  <th>CLIENT</th>
                </tr>
              </thead>
              <tbody>
                  {payments.map(({ PayId, Period,Category, Client }, i) => (
                <tr key={PayId}>
                  <td>{PayId}</td>
                  <td>{Period}</td>
                  <td>{Category}</td>
                  <td>{Client}</td>
                </tr>
              ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </div>
  </Fragment>

      )
}

export default Payments
