import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import { actionTypes } from '../../features/paybill'
import BillPayment from './Billpayment'
import { fetchCreatePayBill } from '../../features/paybill/types'

describe('Paybill', () => {
  const mockStore = configureStore([])
  const store = mockStore({
    count: {
      value: 42,
    },
  })

  // Add jest mock spy to watch for store.dispatch method. See https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname for more info
  jest.spyOn(store, 'dispatch')

  beforeEach(() => {
    // Clear any saved mock data from previous tests, because jest saves calls data for spies and mocks, https://jestjs.io/docs/en/mock-function-api#mockfnmockclear
    store.dispatch.mockClear()
  })

  it('renders without crashing.', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BillPayment />
      </Provider>
    )

    const textValue = wrapper.find('span')
    .filter({ 'data-qa': 'bill-period' }).text()
    expect(textValue).toBe('Period:')
  })

  it('should be possible to pay bill.', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BillPayment />
      </Provider>
    )

    wrapper
      .find('button')
      .filter({ 'data-qa': 'create-bill' })
      .simulate('click')

    expect(store.dispatch).toBeCalledTimes(1)

  })

})
