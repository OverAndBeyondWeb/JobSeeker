import React, { Component } from 'react';
import './JobForm.css';

class JobForm extends Component {

  constructor(props) {
    super(props);
    
    this.jobTitleRef = React.createRef()
    this.jobNumberRef = React.createRef()
    this.jobLinkRef = React.createRef()
    this.dateAppliedRef = React.createRef()
    this.companyNameRef = React.createRef()
  }
  

  componentDidMount() {
    this.jobTitleRef.current.value = this.props.formData['job_title'];
    this.jobNumberRef.current.value = this.props.formData['job_number'];
    this.jobLinkRef.current.value = this.props.formData['job_link'];
    this.dateAppliedRef.current.value = this.props.formData['date_applied'];
    this.companyNameRef.current.value = this.props.formData['company_name'];
  }

  showUs = () => {
    this.jobLinkRef.current.value = 456;
  }

  render() {
    return (
      <form className="JobForm container">
        <label htmlFor="job_title">Title</label>
        <input id="job_title" name="job_title" type="text"  ref={this.jobTitleRef} onChange={this.props.handleChange}/>

        <label htmlFor="job_number">Job Number</label>
        <input id="job_number" name="job_number" type="text" ref={this.jobNumberRef} onChange={this.props.handleChange}/>

        <label htmlFor="job_link">Job Link</label>
        <input id="job_link" name="job_link" type="text" ref={this.jobLinkRef} onChange={this.props.handleChange}/>

        <label htmlFor="date_applied">Date Applied</label>
        <input id="date_applied" name="date_applied" type="date" ref={this.dateAppliedRef} onChange={this.props.handleChange}/>
        
        <label htmlFor="company_name">Company Name</label>
        <input id="company_name" name="company_name" type="text" ref={this.companyNameRef} onChange={this.props.handleChange}/>

        <div onClick={this.showUs}>log component</div>

        <button type="submit" onClick={this.props.submitForm}>Submit</button>
      </form>
    );
  }
  
  
};

export default JobForm;