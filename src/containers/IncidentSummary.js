import React from 'react';
import moment from 'moment';

const IncidentSummary = ({ incident }) => (

  <div className="container row" data-test="notificationSummary">
    <div className="list-group-item list-group-item-action flex-column align-items-start mb-4 col-lg-8 col-md-10 col-sm-12 mx-auto">
      <div className="d-flex w-100 justify-content-between">
        <small className="text-muted">
          {moment(incident.createdon).calendar()}
        </small>
      </div>
      <p className="card-text text-muted">{incident.comment}</p>
    </div>
  </div>

);

export default IncidentSummary;