import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
    state = {
            username: "",
            password: "",
            error: ""
          }

   sendRequest = () => {
            const { password, username} = this.state;
            const res = Axios.post(
              'https://ireporter-version2.herokuapp.com/api/v2/auth/login',
              {
                  password: password,
                  username: username,
                  
                
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
          }

    handleSubmit= (e) =>{
        e.preventDefault();
        
        
        const res = this.sendRequest();
        res.then(
              (res)=>{
                  if(res.data.status ===200){
                    const user = res.data
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.replace('/#/incidents')
                  }
              }
            ).catch(
              (err) => {
                const error = err.response.data.message
                this.setState({
                    ...this.state,
                    error:  error 
                })
              },
            );
          }
        
        
  render() {
    const {error} = this.state
    return (
        <div className="container register">
        <div className="row">
            <div className="col-md-9 register-right">

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control required" name="username"  placeholder="Username *" onChange={this.handleChange}  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control required" name="password" placeholder="Password *" onChange={this.handleChange} />
                                </div>
                                <input type="submit" className="btnRegister"  value="Login" onClick={this.handleSubmit}/>
                            <div className="invalid-feedback is-invalid" id="passwordFeedback" >
                                {error}
                         </div>
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

export default Login 
