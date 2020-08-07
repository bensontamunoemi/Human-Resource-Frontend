import {AUTH_FORM_FIELD,AUTH_ERROR,AUTH_LOADING,SIGNIN_SUCCESS,SIGNUP_SUCCESS} from '../actions/type'
const INITIAL_STATE={
  firstName:"",
  lastName:"",
  companyName:"",
  rangeEmployee:1,
  department:"",
  email:"",
  password:"",
  cPassword:"",
  loading:false,
  error:"",
  user:{},
  token:"",
  success:false
}

export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case AUTH_FORM_FIELD:

      return{
        ...state,
        error:"",
        [action.payload.prop]:action.payload.value
      }
      break;
  case AUTH_ERROR:
      return {
        ...state,error:action.payload,success:false,loading:false
      };
    break;
  case AUTH_LOADING:
        return {
          ...state,loading:true
        };
      break;
  case SIGNUP_SUCCESS:
  console.log(action.payload)
      return {
      ...state,...INITIAL_STATE,user:action.payload.user,token:action.payload.token,success:true
      };
      break;
  case SIGNIN_SUCCESS:
    console.log("sign",action.payload.token)
          return {
          ...state,firstName:"",lastName:"",email:"",password:"",user:action.payload.user,token:action.payload.token,success:true
          };
          break;
    default:
      return state
  }
}
