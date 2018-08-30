import React from 'react';
import './JobForm.css';

const JobForm = () => {
  return (
    <form className="JobForm container">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text"/>

      <label htmlFor="job_number">Job Number</label>
      <input id="job_number" name="job_number" type="text"/>

      <label htmlFor="job_link">Job Link</label>
      <input id="job_link" name="job_link" type="text"/>

      <label htmlFor="date_applied">Date Applied</label>
      <input id="date_applied" name="date_applied" type="date"/>
      
      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text"/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;