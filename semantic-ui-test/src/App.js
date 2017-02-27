
/*jshint esversion: 6 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';
import { Button, ButtonGroup } from 'react-bootstrap';

class App extends Component {
  
  render() {
  
    return (
      <div>
        <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
      </div>
    )
  }
}

export default App;
