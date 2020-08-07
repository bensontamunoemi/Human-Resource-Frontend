import React,{Component} from 'react';

class Signin extends Component {

  render(){
    return(
      <div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src="../assets/images/logo-white.svg" alt="Lucid"/>
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Login to your account</p>
                        </div>
                        <div class="body">
                            <form className="form-auth-small" action="index.html">
                                <div className="form-group">
                                    <label for="signin-email" className="control-label">Email</label>
                                    <input type="email" className="form-control" id="signin-email" value="user@domain.com" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="signin-password" className="control-label">Password</label>
                                    <input type="password" className="form-control" id="signin-password" value="thisisthepassword" placeholder="Password"/>
                                </div>
                                <div className="form-group clearfix">
                                    <label className="fancy-checkbox element-left">
                                        <input type="checkbox"/>
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
                                <div className="bottom">
                                    <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span>
                                    <span>Don't have an account? <a href="page-register.html">Register</a></span>
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

export default Signin
