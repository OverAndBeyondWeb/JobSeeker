import React, { Component } from 'react';
import './RecruiterForm.css';

class RecruiterForm extends Component {

  constructor(props) {
    super(props);

    this.fnameRef = React.createRef();
    this.lnameRef = React.createRef();
    this.titleRef = React.createRef();
    this.internalRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.companyNameRef = React.createRef();
  }

  render() {
    return (
      <form className="RecruiterForm container">
  
        <label htmlFor="fname">First Name</label>
        <input id="fname" name="fname" type="text" onChange={this.props.handleChange}/>
  
        <label htmlFor="lname">Last Name</label>
        <input id="lname" name="lname" type="text" onChange={this.props.handleChange}/>
  
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={this.props.handleChange}/>
  
        <label htmlFor="internal">Internal?</label>
        <input id="internal" name="internal" type="text" onChange={this.props.handleChange}/>
  
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="text" onChange={this.props.handleChange}/>
  
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="text" onChange={this.props.handleChange}/>
        
        <label htmlFor="company_name">Company Name</label>
        <input id="company_name" name="company_name" type="text" onChange={this.props.handleChange}/>
  
        <button type="submit" onClick={this.props.submitForm}>Submit</button>
      </form>
    );
  } 
};

export default RecruiterForm;