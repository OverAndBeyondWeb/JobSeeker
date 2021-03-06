import React, { Component } from 'react';
import axios from 'axios';

import Modal from '../../components/Modal/Modal';
import JobForm from '../../components/Forms/JobForm/JobForm';
import Job from '../../components/Job/Job';
import { compareFormData } from '../../utilityFunctions/util';

class Jobs extends Component {

  state = {
    showModal: false,
    formData: {
      'job_title': '',
      'job_number': '',
      'job_link': '',
      'date_applied': '',
      'company_name': ''
    },
    prepopulationData: {
      'job_title': '',
      'job_number': '',
      'job_link': '',
      'date_applied': '',
      'company_name': ''
    },
    jobData: [],
    addJobForm: false,
    editJobForm: false
  }

  componentDidMount() {
    this.getJobsFromApi();
  }

  getJobsFromApi = () => {
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

  openJobForm = (form, id) => {

    // Set addJobForm or editJobForm to true 
    this.setState({[form]:!this.state[form]});
    
    let job = this.state.jobData.find(job => job.id === id);

    // Replace null values with empty string
    for (let prop in job) {
      if(job[prop] === null) {
        job[prop] = '';
      } 
    };
    this.setState({
      prepopulationData: job ? job : this.state.prepopulationData,
      formData: job
    });
    this.toggleModal();
  }

  addJob = () => {
    const { formData } = this.state;
    axios.post('/api/jobs', formData)
      .then(results => {
        console.log(results);
        let formData = {...this.state.formData}
        formData['job_title'] = '';
        formData['job_number'] = '';
        formData['job_link'] = '';
        formData['date_applied'] = '';
        formData['company_name'] = '';

        this.setState({formData});
        this.getJobsFromApi();
      })
      .catch(err => console.log(err));
  }

  editJob = () => {
    let finalData = compareFormData(this.state.formData, this.state.prepopulationData);

    axios.put('api/jobs', finalData)
      .then(results => {
        this.getJobsFromApi();
      })
      .catch(err => console.log(err));
    
  }
  
  deleteJob = (id) => {
    console.log(id);
    axios.delete('/api/jobs', {data:{id}})
    .then(results => {
      console.log(results);
      console.log('deleted');
      let jobData = this.state.jobData.filter(job => job.id !== id);
      this.setState({jobData});
    })
    .catch(err => console.log(err));
  }
  
  submitForm = (e) => {
    e.preventDefault();
    console.log('submitted');
    if(this.state.addJobForm) {
      this.addJob();
    } else if(this.state.editJobForm) {
      this.editJob();
    } else {
      return;
    }
    this.toggleModal();
    this.setState({
      activeJobId: null,
      addJobForm: false,
      editJobForm: false
    });
  }

  render() {
    return (
      <div>
        {
          this.state.showModal 
          &&  <Modal 
                render={() => (<JobForm 
                                  submitForm={this.submitForm}
                                  handleChange={this.handleChange}
                                  formData={this.state.formData}
                                  prepopulationData={this.state.prepopulationData}
                                />)}
              />
        }
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Jobs</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => this.openJobForm('addJobForm')}
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
                  
                  <th>Company</th>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Application Date</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.jobData.map(job => (
                  <Job job={job} delete={() => this.deleteJob(job.id)} edit={() => this.openJobForm('editJobForm', job.id)} key={job.id}/>
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