import React from 'react';
import './CompanyForm.css';

const CompanyForm = (props) => {
  return (
    <form className="CompanyForm container">
      <label htmlFor="name">Company Name</label>
      <input id="name" name="name" type="text" onChange={props.handleChange}/>

      <label htmlFor="web_link">Web Address</label>
      <input id="web_link" name="web_link" type="text" onChange={props.handleChange}/>

      <label htmlFor="location">Location</label>
      <input id="location" name="location" type="text" onChange={props.handleChange}/>

      <button type="submit" onClick={props.submitForm}>Submit</button>
    </form>
  );
};

export default CompanyForm;