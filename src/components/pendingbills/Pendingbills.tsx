import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../features/pendingbills'
import { fetchPendingBills } from '../../features/pendingbills/types'

const Pendingbills: React.FC = () => {
  const [clientId, setClientId] = useState(1)
   const billings = useSelector(selectors.getBillingsValue)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Client Id:</span>
              <input className="card-title white-text" type='number' value={clientId} onChange={e => setClientId(Number(e.target.value))}/>
              <div className="card-action">
              <div className="group">
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="decrement-counter"
                  onClick={() =>
                    dispatch( fetchPendingBills(clientId)  )
                  }
                >
                  Search
                </button>

              </div>
            </div>

              <table>
                <thead>
                  <tr>
                    <th>BILL ID</th>
                    <th>PERIOD</th>
                    <th>CATEGORY</th>
                    <th>CLIENT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                    {billings.map(({ BillId, Period,Category, Client, Status }, i) => (
                  <tr key={BillId}>
                    <td>{BillId}</td>
                    <td>{Period}</td>
                    <td>{Category}</td>
                    <td>{Client}</td>
                    <td>{Status}</td>
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


export default Pendingbills
