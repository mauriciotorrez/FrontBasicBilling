import axios from "axios";
import { SEARCH_PAYMENTS, 
  SEARCH_DATAREQUEST_PAYMENTS, 
  SEARCH_DATASUCCESS_PAYMENTS, 
  SEARCH_DATAERROR_PAYMENTS } from './actionTypes'
 
export function SearchPaymentsAction() {  
  return {
    type: SEARCH_PAYMENTS
  };
}

export function SearchDataRequestPaymentsAction() {
  return {
    type: SEARCH_DATAREQUEST_PAYMENTS
  };
}

export function SearchDataSuccessPaymentsAction(items:any) {
  return {
    type: SEARCH_DATASUCCESS_PAYMENTS,
    payload: items
  };
}

export function SearchDataErrorPaymentsAction(error:any) {
  return {
    type: SEARCH_DATAERROR_PAYMENTS,
    payload : { error }
  };
}

export function fetchPayments(category:string) {
  return function(dispatch:any) {
      dispatch(SearchDataRequestPaymentsAction());
    return axios.get(`http://localhost:5000/billing/search?category=${category}`)
      .then( response  => {
        const users = response.data;
      dispatch(SearchDataSuccessPaymentsAction(users));
    })
    .catch( function (error){
      console.log(error);
      dispatch(SearchDataErrorPaymentsAction(error.message));
    }        
      ); 

    
  };
}



export interface SystemState {
  count: {
    value: number    
  }
}

