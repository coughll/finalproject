import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { indexpoints: [] };
  }
  componentDidMount() {
    Axios.get('/api/index').then(response => {
      this.setState({ indexpoints: response.data });
      console.log("get resp", response.data)
    }).catch(err => {
      console.log(err);
    });
  };
  addIndexPoint = (e) => {
    e.preventDefault();
    console.log('post called')
    const indexpoint = {
      index: 0.01,
      date: Date(Date.now())
    }
    Axios.post('/api/index', indexpoint)
    .then(res => console.log(res.data));
  }


  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add New Index Points</h3>
        <form>
          <span>
              {this.state.indexpoints[0] && this.state.indexpoints[0].index }
          </span>
          <div className="form-group">
            <label>Add Index Data:  </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Add index point" className="btn btn-primary" onClick={this.addIndexPoint}/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
