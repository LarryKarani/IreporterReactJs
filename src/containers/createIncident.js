import React, { Component } from 'react';
import Axios from 'axios';
import authHeader from '../helpers/authHeader';

const config = {
    headers: authHeader(),
  };

class CreateIncident extends Component {
    state = {
            comment: "",
            location: "",
            incidence_type: "red-flag",
            error: ""
          }


   sendRequest = () => {
            const {comment, location, incidence_type} = this.state;
            const res = Axios.post(
              'https://ireporter-version2.herokuapp.com/api/v2/interventions',
              {
                comment: comment,
                location:  location,
                incidence_type: incidence_type            
              },
              config
            );
        
            return res;
          }

    handleChange = (e) => {
            this.setState(
              {
                [e.target.name]: e.target.value,
              },
            );
          }

    handleSubmit= (e) =>{
        e.preventDefault();
        this.setState(
            {
              ...this.state

            },
          );
        
        const res = this.sendRequest();
        res.then(
              (res)=>{
                  if(res.data.status ===201){
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
                console.log(this.state)
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
                        <h3 className="register-heading">Create an Incident</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text-area" className="form-control required" name="comment"  placeholder="Comment *" onChange={this.handleChange}  />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control required" name="location" placeholder="location *" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                <select name="incident" id="incident">
                                   <option value="Red-flag">Red-flag</option>
                                   <option value="Intervention">Intervention</option>
                                 </select>
                                </div>
                                <input type="submit" className="btnRegister"  value="Submit" onClick={this.handleSubmit}/>
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

export default  CreateIncident
