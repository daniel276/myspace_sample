import React, { Component } from 'react';
import { Button, Input, Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from '../component/event/EventDashboard/EventDashboard';
import Navbar from '../component/Navigation/Navbar/Navbar';


class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Container className="main">
                <EventDashboard/>
            </Container>
        </div>

    );
  }
}

export default App;
