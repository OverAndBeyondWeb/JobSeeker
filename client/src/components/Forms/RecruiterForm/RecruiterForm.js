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

  componentDidMount() {
    this.fnameRef.current.value = this.props.prepopulationData['fname'];
    this.lnameRef.current.value = this.props.prepopulationData['lname'];
    this.titleRef.current.value = this.props.prepopulationData['title'];
    this.internalRef.current.value = this.props.prepopulationData['internal'];
    this.emailRef.current.value = this.props.prepopulationData['email'];
    this.phoneRef.current.value = this.props.prepopulationData['phone'];
    this.companyNameRef.current.value = this.props.prepopulationData['company_name'];
  }

  render() {
    return (
      <form className="RecruiterForm container">
  
        <label htmlFor="fname">First Name</label>
        <input id="fname" name="fname" type="text" ref={this.fnameRef} onChange={this.props.handleChange}/>
  
        <label htmlFor="lname">Last Name</label>
        <input id="lname" name="lname" type="text" ref={this.lnameRef} onChange={this.props.handleChange}/>
  
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" ref={this.titleRef} onChange={this.props.handleChange}/>
  
        <label htmlFor="internal">Internal?</label>
        <input id="internal" name="internal" type="text" ref={this.internalRef} onChange={this.props.handleChange}/>
  
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="text" ref={this.emailRef} onChange={this.props.handleChange}/>
  
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="text" ref={this.phoneRef} onChange={this.props.handleChange}/>
        
        <label htmlFor="company_name">Company Name</label>
        <input id="company_name" name="company_name" ref={this.companyNameRef} type="text" onChange={this.props.handleChange}/>
  
        <button type="submit" onClick={this.props.submitForm}>Submit</button>
      </form>
    );
  } 
};

export default RecruiterForm;