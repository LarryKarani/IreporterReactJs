import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';
import authHeader from '../helpers/authHeader';
const url = 'https://ireporter-version2.herokuapp.com/api/v2/interventions/';
const config = {
  headers: authHeader(),
};
class IncidentDetails extends Component {
    state = {
      incident: {},

    }

    sendRequest = () => {
        const { id } = this.props.match.params;
        const res = Axios.get(`${url}${id}`,
          config)
        return res;
      }
    
    deleteRequest = () => {
      const { id } = this.props.match.params;
      Axios.delete(`${url}${id}`,config)
      .then((res)=>{
        if(res.data.status ===200){
          window.location.replace('/#/incidents')
        }
    })
        
    }
    componentDidMount() {
       const res = this.sendRequest();
        res.then((res) => {
            this.setState({
                incident: res.data.data[0]
            })
        });
    }

    render() {
      const { incident } = this.state;
      console.log(incident)
      return (
        <div className="card" id="details">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Created on: {moment(incident.createdon).calendar()}</h6>
                <p className="card-text">{incident.comment}</p>
                <a href="#" className="card-link">Edit</a>
                <a href="#" onClick={this.deleteRequest} className=" card-link text-danger">Delete</a>
            </div>
        </div>
      );
    }
}

export default  IncidentDetails;