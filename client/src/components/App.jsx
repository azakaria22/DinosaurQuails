import React, { Component, Fragment } from 'react';
import Nav from './Nav.jsx';
import SelectBar from './SelectBar.jsx';
import JobList from './JobList.jsx';
import LoginSignUp from './LoginSignUp.jsx';
import Logout from './Logout.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: false,
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        email: ''
      },
      jobs: [],
      loginSignupButtonIsClicked: false
    };
    // this.showLoginOrSignUp = this.showLoginOrSignUp.bind(this);
  }

  retrieveData(endpoint, params, callback) {
    axios.get(endpoint, params)
          .then(response => {
            // update respective data
            callback(response);
          })
          .catch(err => console.log(err));
  }

  submitData(endpoint, params, callback) {
    axios.post(endpoint, params)
          .then(response => {
            callback(response);
          })
          .catch(err => console.log(err));
  }

  updateData(endpoint, params, callback) {
    axios.put(endpoint, params, callback)
          .then(response => {
            callback(response);
          })
          .catch(err => console.log(err));
  }

  deleteData(endpoint, params, callback) {
    axios.put(endpoint, params, callback)
          .then(response => {
            callback(response);
          })
          .catch(err => console.log(err));
  }

  displayLoginSignup(id) {
    this.setState({
      loginSignupButtonIsClicked: id
    });
    console.log('current id', this.state.loginSignupButtonIsClicked)
  }

  showLoginOrSignUp(){
    const view = this.state.loginSignupButtonIsClicked
    console.log('current state',view )

    if (view) {
      return <LoginSignUp view={view} displayLoginSignup={this.displayLoginSignup.bind(this)}/>
    }
  }

  render() {
    return (
      <div>
        <Fragment>
          <Nav displayLoginSignup={this.displayLoginSignup.bind(this)}/>
          <SelectBar />

          <JobList jobData={this.state.jobs}/>
        </Fragment>
        <div className="signInRegister">
          {this.showLoginOrSignUp()}
        </div>
      </div>
    );
  }
}

export default App;
