import axios from 'axios';
import {
  AUTH_FORM_FIELD,
  AUTH_ERROR,
  AUTH_LOADING,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS
} from './type'
import {authenticate} from "../auth/helper"

export const changeAuthField=({prop,value})=>{
  return{
    type:AUTH_FORM_FIELD,
    payload:{prop,value}
  }
}

export const signinUser=(email,password)=>{

  return async (dispatch)=>{
    try {
    if (email==="") {
      dispatch({type:AUTH_ERROR,payload:"Email must not be empty"})
    }else if (password==="") {
      dispatch({type:AUTH_ERROR,payload:"Password must not be empty"})
    }else {
      dispatch({type:AUTH_LOADING});
     console.log("url",process.env.REACT_APP_API_URL)
     let {data}=await axios.post(`${process.env.REACT_APP_API_URL}signin`,{
       email,password
     })
     console.log("erd",data.token)
     authenticate(data)
     dispatch({type:SIGNIN_SUCCESS,payload:data});
    }
  }catch (err){
    console.log(err.response.data.error)
    dispatch({type:AUTH_ERROR,payload:err.response.data.error});
  }
  }
}

export const signupUser=(email,password,firstName,lastName,cPassword,rangeEmployee,companyName)=>{

  return async (dispatch)=>{
    try {
    if (email==="" || firstName===""||lastName===""||password===""||companyName==="") {
      dispatch({type:AUTH_ERROR,payload:"All field must be entered"})
    }else if (password!==cPassword) {
      dispatch({type:AUTH_ERROR,payload:"Password and confirm password do not match"})
    }else {
      dispatch({type:AUTH_LOADING});
     console.log("url",process.env.REACT_APP_API_URL)
     let {data}=await axios.post(`${process.env.REACT_APP_API_URL}signup`,{
       email,password,first_name:firstName,last_name:lastName
     })
     console.log(data)
     authenticate(data)
     dispatch({type:SIGNUP_SUCCESS,payload:data});
    }
  }catch (err){
    console.log(err.response.data.error)
    dispatch({type:AUTH_ERROR,payload:err.response.data.error})
  }
  }
}
