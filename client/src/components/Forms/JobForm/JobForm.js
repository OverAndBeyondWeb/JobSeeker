import React from 'react';
import './JobForm.css';

const JobForm = (props) => {
  return (
    <form className="JobForm container">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" onChange={props.handleChange}/>

      <label htmlFor="job_number">Job Number</label>
      <input id="job_number" name="job_number" type="text" onChange={props.handleChange}/>

      <label htmlFor="job_link">Job Link</label>
      <input id="job_link" name="job_link" type="text" onChange={props.handleChange}/>

      <label htmlFor="date_applied">Date Applied</label>
      <input id="date_applied" name="date_applied" type="date" onChange={props.handleChange}/>
      
      <label htmlFor="company_name">Company Name</label>
      <input id="company_name" name="company_name" type="text" onChange={props.handleChange}/>

      <button type="submit" onClick={props.submitForm}>Submit</button>
    </form>
  );
};

export default JobForm;