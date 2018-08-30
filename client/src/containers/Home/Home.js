import React, { Component } from 'react';
import './Home.css';

import LandingPage from '../../components/LandingPage/LandingPage';

import summaryImg from '../../images/track_appointments.jpg';

class Home extends Component {

  state = {

  }

  render() {
    return (
      <div className="Home">
        <LandingPage/>
        <div className="content container">
          <section className="summary">
            <div className="summary-1 mb-5">
              <h1>Keep Track of All of Your Jobs</h1>
              <p>
                The job tracker tool allows you to input data to reflect all of the important attributes of a job that you have applied for.
              </p>
            </div>
            <div className="summary-2 mb-5">
              <h1>Have All Relevant Job Information in One Place</h1>
              <p>
                This is your "go to" for your potential job's point of contact, location, job number, and job link just to name a few categories. These attributes help you organize your job search and take the appropriate actions.
              </p>
            </div>
            <div className="summary-img">
              <img src={summaryImg} alt=""/>
            </div>
            <hr/>
          </section>
          
          <section class="row fine-points">
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div class="col-md-4">
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>

            <hr/>
          </section>
        </div>
      </div>
    )
  }
};

export default Home;
