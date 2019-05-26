import React, { Component } from 'react';
import Axios from 'axios';
import authHeader from '../helpers/authHeader';

const url =  'https://ireporter-version2.herokuapp.com/api/v2/interventions/';
const config = {
    headers: authHeader(),
  
  };

class Edit extends Component {
    state = {
            comment: "",
            message: "",
            error: "",
          }
    
   
    sendRequest = () => {
            const { id } = this.props.match.params;
            const {comment} = this.state
            const res = Axios.patch(`${url}${id}/comment`,
            {
                comment: comment,
            },
            config)
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
        
        
        const res = this.sendRequest();
        res.then(
              (res)=>{
                 console.log(res)
                  if(res.status ===200){
                    this.setState(
                        {
                          ...this.state,
                          message: res.data.message
                        },
                      );
                    
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
                                    <input type="text-area" className="form-control required" name="comment"  placeholder="Enter new comment *" onChange={this.handleChange}  />
                                </div>
                                <input type="submit" className="btnRegister"  value="Update comment" onClick={this.handleSubmit}/>
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

export default Edit