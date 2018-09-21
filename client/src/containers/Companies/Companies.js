import React, { Component } from 'react';
import axios from 'axios';

import Modal from '../../components/Modal/Modal';
import Company from '../../components/Company/Company';
import CompanyForm from '../../components/Forms/CompanyForm/CompanyForm';

class Companies extends Component {

  state = {
    showModal: false,
    formData: {
      name: '',
      'web_link': '',
      location: ''
    },
    companyData: []  
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(results => {
        this.setState({companyData: results.data})
      });
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleChange = (e) => {
    let formData = {...this.state.formData}
    formData[e.target.name] = e.target.value
    this.setState({formData});
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('submitted');
    const { formData } = this.state;
    axios.post('/api/companies', formData)
      .then(results => {
        console.log(results);
        let formData = {...this.state.formData}
        formData.name = '';
        formData['web_link'] = '';
        formData.location = '';

        this.setState({formData});
      })
      .catch(err => console.log(err));
    this.toggleModal();
  }

  editCompany = (name) => {
    console.log('edit');
    console.log(name);
    this.toggleModal();
  }

  deleteCompany = (name) => {
    axios.delete('/api/companies', {data: {name}})
      .then(results => {
        const companyData = this.state.companyData.filter(company => company.name !== name);
        this.setState({companyData});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.showModal && <Modal render={() => (<CompanyForm submitForm={this.submitForm} handleChange={this.handleChange}/>)}/>}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Companies</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={this.toggleModal}
                >Add Company</button>
                <button className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <canvas className="my-4 w-100" id="myChart" width="0" height="0"></canvas>

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Site Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companyData.map(company => (
                  <Company company={company} key={company.name} delete={this.deleteCompany} edit={this.editCompany}/>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    )
  }
};

export default Companies;