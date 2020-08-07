import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {changeAuthField,signupUser} from '../actions';
import ReactLoading from 'react-loading';

class Signup extends Component {

  state={
    redirect:false,
  }

  handleSubmit=(event)=>{
  event.preventDefault();
  const {
    firstName,lastName,email,
    password,cPassword,companyName,
    rangeEmployee,signupUser
  }=this.props;
  signupUser(email,password,firstName,lastName,cPassword,rangeEmployee,companyName);
}

  render(){
    const {firstName,lastName,email,password,companyName,cPassword,rangeEmployee,error,loading,success,changeAuthField}=this.props;
    if (success) {
      return <Redirect to="/" />
    }
    if (loading) {
      return (
        <div style={{width: "100%",height: "100%",alignItems: 'center'}} className="items-center justify-center flex flex-column flex-wrap">
          <center>
          <ReactLoading type="bubbles" color="blue" height={100} width={100} />
          <h4 >Processing...</h4>
        </center>
        </div>
        )
    }
    return(
      <div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src={require('../assets/images/logo.svg')} alt="HR"/>
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Create Account</p>
                        </div>
                        <div class="body">
                            <form onSubmit={this.handleSubmit} className="form-auth-small">
                            <div className="form-group">
                                <label for="signin-firstName" className="control-label ">Your First Name</label>
                                <input type="text" className="form-control" id="signin-firstName" value={firstName} onChange={(event)=>changeAuthField({prop:"firstName",value:event.target.value})} placeholder="firstName" />
                            </div>
                            <div className="form-group">
                                <label for="signin-lastName" className="control-label ">Your Last Name</label>
                                <input type="text" className="form-control" id="signin-lastName" value={lastName} onChange={(event)=>changeAuthField({prop:"lastName",value:event.target.value})} placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label for="signin-Company" className="control-label ">Company Name</label>
                                <input type="text" className="form-control" id="signin-Company" value={companyName} onChange={(event)=>changeAuthField({prop:"companyName",value:event.target.value})}  placeholder="Company Name" />
                            </div>
                            <div className="form-group">
                                <label for="signin-email" className="control-label ">Range of Employees</label>
                              <select className="form-control" onChange={(event)=>changeAuthField({prop:"rangeEmployee",value:event.target.value})} value={rangeEmployee}>
                              <option value="">Choose</option>
                              <option>1-50</option>
                              <option>51-100</option>
                              <option>101-200</option>
                              <option>200-500</option>
                              <option>500+</option>

                              </select>
                            </div>
                                <div className="form-group">
                                    <label for="signin-email" className="control-label ">Email</label>
                                    <input type="email" className="form-control" id="signin-email" onChange={(event)=>changeAuthField({prop:"email",value:event.target.value})} value={email} placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="signin-password" className="control-label ">Password</label>
                                    <input type="password" className="form-control" id="signin-password" onChange={(event)=>changeAuthField({prop:"password",value:event.target.value})} value={password} placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label for="signin-password" className="control-label ">Confirm Password</label>
                                    <input type="password" className="form-control" id="signin-password" value={cPassword} onChange={(event)=>changeAuthField({prop:"cPassword",value:event.target.value})} placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">CONTNUE</button>
                                <div className="bottom">
                                    <span className="helper-text m-b-10"><i class="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span>
                                    <span>Already have an account? <a href="page-register.html">Login</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    )
  }
}

const mapStateToProps=({auth})=>{
  const {email,password,error,loading,firstName,rangeEmployee,companyName,lastName,department,cPassword,success} =auth;
  console.log("ddd",email)
  return{
    email,password,error,companyName,rangeEmployee,loading,firstName,lastName,cPassword,success,department
  }
}
export default connect(mapStateToProps,{changeAuthField,signupUser})(Signup)
