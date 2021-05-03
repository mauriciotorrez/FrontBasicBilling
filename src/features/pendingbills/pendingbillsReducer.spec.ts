import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { SEARCH_PENDINGBILLS,
    SEARCH_DATAREQUEST_PENDINGBILLS, 
    SEARCH_DATASUCCESS_PENDINGBILLS, 
    SEARCH_DATAERROR_PENDINGBILLS
   } from './actionTypes' 
import pendingbillsReducer from './pendingbillsReducer'
import { fetchPendingBills } from './types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates SEARCH_DATAREQUEST_PENDINGBILLS when fetching peinding bills has been done', () => {
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
        { type: SEARCH_DATAREQUEST_PENDINGBILLS },
        { type: SEARCH_DATASUCCESS_PENDINGBILLS, payload:  [{
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
      return store.dispatch(fetchPendingBills(3)).then(() => {
        expect(expectedActions.toString()).toContain(store.getActions().toString())
      })*/
    })
  })