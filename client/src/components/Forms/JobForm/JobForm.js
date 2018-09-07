import React, { Component } from 'react';
import './JobForm.css';

class JobForm extends Component {

  state = {
    formData : this.props.formData
  }

  render() {
    return (
      <form className="JobForm container">
        <label htmlFor="job_title">Title</label>
        <input id="job_title" name="job_title" type="text" value={this.state.formData['job_title']} onChange={this.props.handleChange}/>

        <label htmlFor="job_number">Job Number</label>
        <input id="job_number" name="job_number" type="text" value={this.state.formData['job_number']} onChange={this.props.handleChange}/>

        <label htmlFor="job_link">Job Link</label>
        <input id="job_link" name="job_link" type="text" value={this.state.formData['job_link']} onChange={this.props.handleChange}/>

        <label htmlFor="date_applied">Date Applied</label>
        <input id="date_applied" name="date_applied" type="date" value={this.state.formData['date_applied']} onChange={this.props.handleChange}/>
        
        <label htmlFor="company_name">Company Name</label>
        <input id="company_name" name="company_name" type="text" value={this.state.formData['company_name']} onChange={this.props.handleChange}/>

        <button type="submit" onClick={this.props.submitForm}>Submit</button>
      </form>
    );
  }
  
};

export default JobForm;