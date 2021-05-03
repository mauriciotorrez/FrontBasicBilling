import { SEARCH_PENDINGBILLS, 
  SEARCH_DATAREQUEST_PENDINGBILLS, 
  SEARCH_DATASUCCESS_PENDINGBILLS, 
  SEARCH_DATAERROR_PENDINGBILLS } from './actionTypes'

const initialState = {
  loadging: false,
  items:[],
  error:''
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case SEARCH_PENDINGBILLS:
      return { 
        ...state
      }
    case SEARCH_DATAREQUEST_PENDINGBILLS:      
      return { 
        ...state,
        loading:true, 
        error: '' 
      }
    case SEARCH_DATASUCCESS_PENDINGBILLS:
      return { 
        ...state, 
        loading:false, 
        items: action.payload,
        error: ''
      }
    case SEARCH_DATAERROR_PENDINGBILLS:
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
