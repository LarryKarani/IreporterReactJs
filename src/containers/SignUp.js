import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state = {
            firstname: "",
            lastname: "",
            othername: "",
            password: "",
            email: "",
            phoneNumber: "",
            username: "",
            error: ""
          }

   sendRequest = () => {
            const {firstname, lastname, password , othername, email, phoneNumber,username} = this.state;
            const res = Axios.post(
              'https://ireporter-version2.herokuapp.com/api/v2/auth/signup',
              {
                  firstname: firstname,
                  username: username,
                  lastname: lastname,
                  password: password,
                  othername:othername,
                  email: email,
                  password: password,
                  phoneNumber: phoneNumber,
                
              },
            );
        
            return res;
          }

    handleChange = (e) => {
            const node = e.target.name;
            this.setState(
              {
                [e.target.name]: e.target.value,
              },
            );
            document.getElementById('feedback').innerHTML = ""
          }

    handleSubmit= (e) =>{
        e.preventDefault();
        
        
        const res = this.sendRequest();
        res.then(
              (res)=>{
                  if(res.data.status ===201){
                    window.location.replace('/#/login')
                  }
              }
            ).catch(
              (err) => {
                const error = err.response.data.message
                this.setState({
                    ...this.state,
                    error:  error 
                })
                console.log(this.state)
              },
            );
          }
        
        
  render() {
    const {error} = this.state
    return (
        <div className="container register">
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Welcome</h3>
                <p>Lets make the world a better place!</p>
                <Link to ={'/login/'} className="card-link login">Login</Link>
            </div>
            <div className="col-md-9 register-right">

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">Sign Up</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control required" name="firstname"  placeholder="First Name *" onChange={this.handleChange}  />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control required" name="lastname" placeholder="Last Name *" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" autocomplete="off" className="form-control required" name="password" placeholder="Password *"  onChange={this.handleChange}  />
                                </div>
                                <div className="form-group">
                                    <input type="text" autocomplete="off" className="form-control required" name="username" placeholder="Username *"  onChange={this.handleChange}  />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email"  name="email" className="form-control required" placeholder="Your Email *" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" minlength="10" maxlength="10" name="phoneNumber" className="form-control" placeholder="Your Phone *" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="othername" placeholder="Othername*" onChange={this.handleChange} />
                                </div>
                                <input type="submit" className="btnRegister"  value="Register" onClick={this.handleSubmit}/>
                            </div>
                            <div className="invalid-feedback is-invalid" id="passwordFeedback" >
                                {error}
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

export default SignUp
