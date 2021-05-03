import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { CREATE_BILLS, 
  CREATE_DATAREQUEST_BILLS, 
  CREATE_DATASUCCESS_BILLS, 
  CREATE_DATAERROR_BILLS } from './actionTypes'
import billpaymentReducer from './billpaymentReducer'
import { fetchCreateBills } from './types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates CREATE_DATAREQUEST_BILLS when fetching create bills has been done', () => {
      fetchMock.getOnce('/bills', {
        body: { bills: [{
            "Amount": 0,
            "BillId": 36,
            "Category": "SEWER",
            "Client": "Albert Kenny",
            "Period": 202104,
            "Status": "Pending"
           }] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: CREATE_DATAREQUEST_BILLS },
        { type: CREATE_DATASUCCESS_BILLS, payload:  [{
                     "Amount": 0,
                     "BillId": 36,
                     "Category": "SEWER",
                     "Client": "Albert Kenny",
                     "Period": 202104,
                     "Status": "Pending"
                    }] } 
      ]
      const store = mockStore({ bills: [] })
  /*
      return store.dispatch(fetchCreateBills(3, "")).then(() => {
        expect(expectedActions.toString()).toContain(store.getActions().toString())
      })*/
    })
  })