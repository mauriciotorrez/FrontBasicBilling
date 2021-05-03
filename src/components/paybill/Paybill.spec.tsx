import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import { actionTypes } from '../../features/paybill'
import Paybill from './Paybill'
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
        <Paybill />
      </Provider>
    )

    const textValue = wrapper.find('span')
    .filter({ 'data-qa': 'client-id' }).text()
    expect(textValue).toBe('Client Id:')
  })

  it('should be possible to pay bill.', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Paybill />
      </Provider>
    )

    wrapper
      .find('button')
      .filter({ 'data-qa': 'pay-bill' })
      .simulate('click')

    expect(store.dispatch).toBeCalledTimes(1)

  })

})
