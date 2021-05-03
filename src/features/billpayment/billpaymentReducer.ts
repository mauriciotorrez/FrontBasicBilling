import { CREATE_BILLS, 
  CREATE_DATAREQUEST_BILLS, 
  CREATE_DATASUCCESS_BILLS, 
  CREATE_DATAERROR_BILLS } from './actionTypes'

const initialState = {
  loadging: false,
  items:[],
  error:''
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case CREATE_BILLS:
      return { 
        ...state
      }
    case CREATE_DATAREQUEST_BILLS:      
      return { 
        ...state,
        loading:true, 
        error: '' 
      }
    case CREATE_DATASUCCESS_BILLS:
      return { 
        ...state, 
        loading:false, 
        items: action.payload,
        error: ''
      }
    case CREATE_DATAERROR_BILLS:
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
