import React, { Component } from 'react';
import axios from 'axios';

import Modal from '../../components/Modal/Modal';
import JobForm from '../../components/Forms/JobForm/JobForm';
import Job from '../../components/Job/Job';

class Jobs extends Component {

  state = {
    showModal: false,
    formData: {
      title: '',
      'job_number': '',
      'job_link': '',
      'date_applied': '',
      'company_name': ''
    },
    jobData: []
  }

  componentDidMount() {
    axios.get('/api/jobs')
      .then(results => {
        this.setState({jobData: results.data});
      })
      .catch(err => console.log(err));
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
    axios.post('/api/jobs', formData)
      .then(results => {
        console.log(results);
        let formData = {...this.state.formData}
        formData.title = '';
        formData['job_number'] = '';
        formData['job_link'] = '';
        formData['date_applied'] = '';
        formData['company_name'] = '';

        this.setState({formData});
      })
      .catch(err => console.log(err));
    this.toggleModal();
  }

  deleteJob = (id) => {
    console.log(id);
    axios.delete('/api/jobs', {data:{id}})
      .then(results => {
        console.log('deleted');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.showModal && <Modal render={() => (<JobForm submitForm={this.submitForm} handleChange={this.handleChange}/>)}/>}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Jobs</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={this.toggleModal}
                >Add Job</button>
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
                  <th>Company</th>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Application Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.jobData.map(job => (
                  <Job job={job} delete={() => this.deleteJob(job.id)} key={job.id}/>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    )
  }
};

export default Jobs;