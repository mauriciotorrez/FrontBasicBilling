import axios from "axios";
import { SEARCH_PENDINGBILLS,
  SEARCH_DATAREQUEST_PENDINGBILLS, 
  SEARCH_DATASUCCESS_PENDINGBILLS, 
  SEARCH_DATAERROR_PENDINGBILLS
 } from './actionTypes' 
 
export function SearchPendingBillsAction() {  
  return {
    type: SEARCH_PENDINGBILLS
  };
}

export function SearchDataRequestPendingBillsAction() {
  return {
    type: SEARCH_DATAREQUEST_PENDINGBILLS
  };
}

export function SearchDataSuccessPendingBillsAction(items:any) {
  return {
    type: SEARCH_DATASUCCESS_PENDINGBILLS,
    payload: items
  };
}

export function SearchDataErrorPendingBillsAction(error:any) {
  return {
    type: SEARCH_DATAERROR_PENDINGBILLS,
    payload : { error }
  };
}

export function fetchPendingBills(clientId:number) {
  return function(dispatch:any) {
      dispatch(SearchDataRequestPendingBillsAction());
    return axios.get(`http://localhost:5000/billing/pending?ClientId=${clientId}`)
      .then( response  => {
        const users = response.data;
      dispatch(SearchDataSuccessPendingBillsAction(users));
    })
    .catch( function (error){
      console.log(error);
      dispatch(SearchDataErrorPendingBillsAction(error.message));
    }        
      ); 

    
  };
}



export interface SystemState {
  count: {
    value: number    
  }
}

