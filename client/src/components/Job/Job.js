import React from 'react';
import './Job.css';



 const Job = (props) => {
  return (
    <tr>
      <td>{props.job['active']}</td>
        <td>{props.job['company_name']}</td>
        <td>{props.job['job_title']}</td>
        <td>{props.job['job_link']}</td>
        <td>{props.job['date_applied'].substring(0, 10)}</td>
        <td>
          <button onClick={props.delete} data-id={props.job.id}>Delete</button>
          <button>Edit</button>
        </td>
    </tr>
  );
};

export default Job;
