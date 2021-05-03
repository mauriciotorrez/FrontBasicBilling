import { SEARCH_PAYMENTS, 
  SEARCH_DATAREQUEST_PAYMENTS, 
  SEARCH_DATASUCCESS_PAYMENTS, 
  SEARCH_DATAERROR_PAYMENTS } from './actionTypes'

const initialState = {
  loadging: false,
  items:[],
  error:''
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case SEARCH_PAYMENTS:
      return { 
        ...state
      }
    case SEARCH_DATAREQUEST_PAYMENTS:      
      return { 
        ...state, 
        loading:true, 
        error: '' 
      }
    case SEARCH_DATASUCCESS_PAYMENTS:
      return { 
        ...state, 
        loading:false, 
        items: action.payload,
        error: ''
      }
    case SEARCH_DATAERROR_PAYMENTS:
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
