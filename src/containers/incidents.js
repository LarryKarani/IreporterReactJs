import React, { Component } from 'react'
import authHeader from '../helpers/authHeader'
import Axios from 'axios'
import IncidentSummary from './IncidentSummary'


const config = {
    headers: authHeader(),
  
  };
class Incidents extends Component {

    state = {
        incidents: "",
      }
  
sendRequest = () => {
        const res = Axios.get(
          'https://ireporter-version2.herokuapp.com/api/v2/interventions',
          config,
        )
        return res;
      }

componentDidMount(){
    const res = this.sendRequest()
    res.then((res)=>{
        this.setState({
            incidents: res.data.data
        })
    })
    

}

  render() {
    const { incidents } = this.state;
      if (incidents < 1) {
        return (
          <div className="container" data-test="articleListNone">
            <div className="d-flex justify-content-center">
              <p className="text-muted mt-1 ml-1">No incidents available</p>
            </div>
          </div>
        );
      }
      return (
        <div className="list-group container p-4">
          { incidents.map(incident => (
            <IncidentSummary incident={incident} />
          )) }
        </div>

      );
  }
}

export default Incidents
