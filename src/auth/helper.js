export const authenticate=(jwt)=>{
  console.log("jwtauth",jwt)
  if (typeof window !="undefined") {
    sessionStorage.setItem("jwt",JSON.stringify(jwt))
    //next();

  }
}



export const isAuthenticated=()=>{
  if (typeof window =="undefined") {
    return false;
  }
  if (sessionStorage.getItem("jwt")) {
    return JSON.parse(sessionStorage.getItem("jwt"))
  } else {
    return false;
  }
}


export const signout=(next)=>{
  if(typeof window !=="undefined") sessionStorage.removeItem("jwt")
  next()
  return fetch(`${process.env.REACT_APP_API_URL}signout`,{
    method:"GET"
  })
  .then((response)=> {return response.json()})
  .catch(error=>console.log(error))
}
