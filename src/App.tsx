import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Navbar } from './components/Navbar'
import { PendingBills } from './pages/PendingBills'
import { Payments } from './pages/Payments'
import { BillPayment } from './pages/BillPayment'
import { Paybills } from './pages/PayBill'

const App: React.FC = () => {
  return (    
    <Provider store={store}>
      <BrowserRouter>    
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Payments} exact />
            <Route path="/pendingbills" component={PendingBills} />
            <Route path="/billpayment" component={BillPayment} />
            <Route path="/paybill" component={Paybills} />
          </Switch>
        </div>
      </BrowserRouter>    
    </Provider>
  )
}

export default App
