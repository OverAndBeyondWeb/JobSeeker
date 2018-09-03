import React from 'react';
import './RecruiterForm.css';

const RecruiterForm = (props) => {
  return (
    <form className="RecruiterForm container">

      <label htmlFor="fname">First Name</label>
      <input id="fname" name="fname" type="text" onChange={props.handleChange}/>

      <label htmlFor="lname">Last Name</label>
      <input id="lname" name="lname" type="text" onChange={props.handleChange}/>

      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" onChange={props.handleChange}/>

      <label htmlFor="internal">Internal?</label>
      <input id="internal" name="internal" type="text" onChange={props.handleChange}/>

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="text" onChange={props.handleChange}/>

      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="text" onChange={props.handleChange}/>
      
      <label htmlFor="company_name">Company Name</label>
      <input id="company_name" name="company_name" type="text" onChange={props.handleChange}/>

      <button type="submit" onClick={props.submitForm}>Submit</button>
    </form>
  );
};

export default RecruiterForm;