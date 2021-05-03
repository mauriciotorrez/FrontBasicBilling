import { applyMiddleware, combineReducers, createStore } from 'redux'
 import   reduxLogger   from 'redux-logger'
 import   thunkMiddleare   from 'redux-thunk'
 
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { PayBillReducer } from './features/paybill'
import { PaymentsReducer } from './features/payments'
import { PendingbillsReducer } from './features/pendingbills'
import { BillpaymentReducer } from './features/billpayment'



/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  paybill: PayBillReducer,
  payments: PaymentsReducer,
  pendingbills: PendingbillsReducer,
  billpayment: BillpaymentReducer
})


const store = createStore(
  rootReducer, applyMiddleware(thunkMiddleare, reduxLogger) // ,
  /* preloadedState, */ // devToolsEnhancer({})
)
 
console.log('initial state', store.getState());




export default store
