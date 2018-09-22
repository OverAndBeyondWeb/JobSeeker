import React, { Component } from 'react';
import './CompanyForm.css';

class CompanyForm extends Component {

  constructor(props) {
    super(props);
    
    this.nameRef = React.createRef();
    this.webLinkRef = React.createRef();
    this.locationRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.value = this.props.prepopulationData.name;
    this.webLinkRef.current.value = this.props.prepopulationData['web_link'];
    this.locationRef.current.value = this.props.prepopulationData.location;
  }

  render() {
    return (
      <form className="CompanyForm container">
        <label htmlFor="name">Company Name</label>
        <input id="name" name="name" type="text" ref={this.nameRef}onChange={this.props.handleChange}/>

        <label htmlFor="web_link">Web Address</label>
        <input id="web_link" name="web_link" type="text" ref={this.webLinkRef}onChange={this.props.handleChange}/>

        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" ref={this.locationRef}onChange={this.props.handleChange}/>

        <button type="submit" onClick={this.props.submitForm}>Submit</button>
      </form>
    );
  }
  
};

export default CompanyForm;