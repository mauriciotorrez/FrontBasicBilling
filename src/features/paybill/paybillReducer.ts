import { CREATE_PAYBILL, 
  CREATE_DATAREQUEST_PAYBILL, 
  CREATE_DATASUCCESS_PAYBILL, 
  CREATE_DATAERROR_PAYBILL } from './actionTypes'

const initialState = {
  loadging: false,
  items:[],
  error:''
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case CREATE_PAYBILL:
      return { 
        ...state
      }
    case CREATE_DATAREQUEST_PAYBILL:      
      return { 
        ...state,
        loading:true, 
        error: '' 
      }
    case CREATE_DATASUCCESS_PAYBILL:
      return { 
        ...state, 
        loading:false, 
        items: action.payload,
        error: ''
      }
    case CREATE_DATAERROR_PAYBILL:
      return { 
        ...state, 
        loading:false, 
        items:[],
        error:action.payload
      }
    default:
      return state
  }
}
