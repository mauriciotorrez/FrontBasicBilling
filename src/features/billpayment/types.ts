import axios from "axios";
import { CREATE_BILLS, 
  CREATE_DATAREQUEST_BILLS, 
  CREATE_DATASUCCESS_BILLS, 
  CREATE_DATAERROR_BILLS } from './actionTypes'
 
export function SearchCreateBillsAction() {  
  return {
    type: CREATE_BILLS
  };
}

export function CreateDataRequestPendingBillsAction() {
  return {
    type: CREATE_DATAREQUEST_BILLS
  };
}

export function CreateDataSuccessPendingBillsAction(items:any) {
  return {
    type: CREATE_DATASUCCESS_BILLS,
    payload: items
  };
}

export function CreateDataErrorPendingBillsAction(error:any) {
  return {
    type: CREATE_DATAERROR_BILLS,
    payload : { error }
  };
}

export function fetchCreateBills(period:number, category:string) {
  return function(dispatch:any) {
      dispatch(CreateDataRequestPendingBillsAction());
    return axios.post(`http://localhost:5000/billing/bills`, { "period": period, "category": category })
      .then( response  => {
      dispatch(CreateDataSuccessPendingBillsAction(response));
    })
    .catch( function (error){
      console.log(error);
      dispatch(CreateDataErrorPendingBillsAction(error.message));
    }        
      ); 

    
  };
}



export interface SystemState {
  count: {
    value: number    
  }
}

