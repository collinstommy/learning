import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineLite from 'gsap/TimelineLite';
import TweenLite from 'gsap/TweenLite';
import TweenMax from 'gsap/TweenMax';
import styled from "styled-components";
import { Back, Bounce } from 'gsap/EasePack';


const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  position: absolute;
`;

class App extends Component {
  constructor(props){
    super(props);


    this.tl = new TimelineLite({
    });
    this.t2 = new TimelineLite({
    });
  }

  componentDidMount(){
    this.animate();
  }

  animate = () => {
    this.tl.add(TweenLite.to(this.image, 2, {
      x:600,
      y: 200,
      rotation: 360,
      scale: 0.5,
      ease: Back.easeOut
    }));

    this.t2.add(TweenLite.from(this.image2, 2, {
      opactiy: 0,
      scale: 0,
      ease: Bounce.easeOut
    }));
  }

  handleAnimate = () => {
    this.tl.reverse();
  }


  render() {
    return (
      <Container className="App">
        <button onClick={this.handleAnimate}>Animate</button>
        <Image src={logo} className="App-logo" alt="logo" innerRef={ref => { this.image = ref; }} />        
        <Image src={logo} className="App-logo" alt="logo" innerRef={ref => { this.image2 = ref; }} />        
      </Container>
    );
  }
}

export default App;
