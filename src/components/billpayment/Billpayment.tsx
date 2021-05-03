import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../features/billpayment'
import { fetchCreateBills } from '../../features/billpayment/types'

const Billpayment: React.FC = () => {
  const [period, setPeriod] = useState(202106)
  const [category, setCategory] = useState("SEWER")
 const dispatch = useDispatch()

  return (
  
    <Fragment>
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title" data-qa="bill-period">Period:</span>
            <input className="card-title white-text" type='number' value={period} onChange={e => setPeriod(Number(e.target.value))}/>
            <span className="card-title">Category:</span>
            <input className="card-title white-text" type='text' value={category} onChange={e => setCategory(e.target.value)}/>
            <div className="card-action">
            <div className="group">
              <button
                className="waves-effect waves-teal btn-flat blue"
                type="button"
                data-qa="create-bill"
                onClick={() =>
                  dispatch( fetchCreateBills(period, category) )
                }
              >
                Create Bills
              </button>

            </div>
          </div>

          </div>

        </div>
      </div>
    </div>
  </Fragment>

  )
}

export default Billpayment
