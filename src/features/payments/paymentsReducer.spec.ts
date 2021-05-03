import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { SEARCH_PAYMENTS, 
  SEARCH_DATAREQUEST_PAYMENTS, 
  SEARCH_DATASUCCESS_PAYMENTS, 
  SEARCH_DATAERROR_PAYMENTS } from './actionTypes'
import paymentsReducer from './paymentsReducer'
import { fetchPayments } from './types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates SEARCH_DATAREQUEST_PAYMENTS when fetching payments has been done', () => {
      fetchMock.getOnce('/payments', {
        body: { payments: [{
          "PayId": 3,
          "Period": 202101,
          "Category": "ELECTRICITY",
          "Client": "Joseph Carlton"
           }] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: SEARCH_DATAREQUEST_PAYMENTS },
        { type: SEARCH_DATASUCCESS_PAYMENTS, payload:  [{
          "PayId": 3,
          "Period": 202101,
          "Category": "ELECTRICITY",
          "Client": "Joseph Carlton"
                    }] } 
      ]
      const store = mockStore({ payments: [] })
  /*
      return store.dispatch(fetchPayments("ELECTRICITY")).then(() => {
        expect(expectedActions.toString()).toContain(store.getActions().toString())
      })*/
    })
  })