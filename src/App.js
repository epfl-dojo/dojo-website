import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import hjson from 'hjson';
import Timeline from './Timeline';

class App extends Component {
  constructor () {
      super();

      this.state = {
          events: []
      }
  }

  ajaxEvents() {
    var self = this
    axios.get('https://rawgit.com/epfl-dojo/dojo-data/master/events.hjson')
      .then(function (response) {
        var dojoArchives = response.data;
        var dojoArchivesJson = hjson.parse(dojoArchives);
        console.log("reponse data:", dojoArchivesJson.events)
        self.setState({events: dojoArchivesJson.events});
      }
    );
  }

  componentDidMount() {
      this.ajaxEvents();

  }

  render() {
      console.log(this.state.events)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <Timeline events={this.state.events} />

      </div>
    )
  }
}

export default App;
