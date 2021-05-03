import axios from "axios";
import { CREATE_PAYBILL, 
  CREATE_DATAREQUEST_PAYBILL, 
  CREATE_DATASUCCESS_PAYBILL, 
  CREATE_DATAERROR_PAYBILL } from './actionTypes'
 
export function SearchCreatePayBillAction() {  
  return {
    type: CREATE_PAYBILL
  };
}

export function CreateDataRequestPayBillAction() {
  return {
    type: CREATE_DATAREQUEST_PAYBILL
  };
}

export function CreateDataSuccessPayBillAction(items:any) {
  return {
    type: CREATE_DATASUCCESS_PAYBILL,
    payload: items
  };
}

export function CreateDataErrorPayBillAction(error:any) {
  return {
    type: CREATE_DATAERROR_PAYBILL,
    payload : { error }
  };
}

export function fetchCreatePayBill(clientId:number,period:number, category:string) {
  return function(dispatch:any) {
      dispatch(CreateDataRequestPayBillAction());
    return axios.post(`http://localhost:5000/billing/pay`, { "clientId": clientId, "period": period, "category": category })
      .then( response  => {
      dispatch(CreateDataSuccessPayBillAction(response));
    })
    .catch( function (error){
      console.log(error);
      dispatch(CreateDataErrorPayBillAction(error.message));
    }        
      ); 
    
  };
}



export interface SystemState {
  count: {
    value: number    
  }
}

