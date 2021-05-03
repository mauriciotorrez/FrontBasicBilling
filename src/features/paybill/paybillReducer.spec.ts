import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { CREATE_PAYBILL, 
  CREATE_DATAREQUEST_PAYBILL, 
  CREATE_DATASUCCESS_PAYBILL, 
  CREATE_DATAERROR_PAYBILL } from './actionTypes'
import paybillReducer from './paybillReducer'
import { fetchCreatePayBill } from './types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates CREATE_DATAREQUEST_PAYBILL when fetching create pay bills has been done', () => {
      fetchMock.getOnce('/pays', {
        body: { pays: [{
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
        { type: CREATE_DATAREQUEST_PAYBILL },
        { type: CREATE_DATASUCCESS_PAYBILL, payload:  [{
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
      return store.dispatch(fetchCreatePayBill(1, 3, "")).then(() => {
        expect(expectedActions.toString()).toContain(store.getActions().toString())
      })*/
    })
  })