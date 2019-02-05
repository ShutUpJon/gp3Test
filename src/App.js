import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import CustomNavbar from './components/Nav/Navbar';
import CustomCarousel from './components/Carousel/Carousel';
import CustomJumbotron from './components/Jumbotron/Jumbotron';
import CustomCard from './components/Card/Card';
import CustomImage from './components/Image/Image';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <CustomNavbar />
          <CustomCarousel />
          <CustomJumbotron />
          <CustomCard />
          <CustomImage />
        </Container>
      </div>
    );
  }
}

export default App;
