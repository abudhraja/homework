import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Col, Row, Button } from "reactstrap";
import './App.css';
import HomeCard from './components/HomeCard.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      homes: [
        {
          id: 0,
          title: 'Beautiful 2 Bedroom Apt',
          img: 'https://avatars.mds.yandex.net/get-pdb/231404/47f71851-981c-46cf-805b-1b1f955988d3/orig',
          price: '$99'
        },
        {
          id: 1,
          title: 'Quiet Home',
          img: 'https://www.lennar.com/images/elevations/24648_eleC_lg.jpg?w=1200&h=650&as=1',
          price: '$250'
        },
        {
          id: 2,
          title: 'Modern House',
          img: 'https://media.gettyimages.com/photos/north-american-home-picture-id178373460?b=1&k=6&m=178373460&s=612x612&w=0&h=MMXniWl_sTHhUv5zq-j9nmsyxRz83lmWl3uRM9b1LE8=',
          price: '$379'
        },
        {
          id: 3,
          title: 'Apt with a Pool!',
          img: 'https://platformapartments.com/assets/images/cache/home_videoimage-09dfa5fd1c7c77d91bc5e45f785ca14e.jpg',
          price: '$89'
        },
        {
          id: 4,
          title: 'Castle Apartment',
          img: 'http://i43.photobucket.com/albums/e388/Swinefeld/Miscellanious/Stonehurst.jpg',
          price: '$105'
        },
        {
          id: 5,
          title: 'Historic Condo',
          img: 'https://fabrik.blob.core.windows.net/public/cba7ae37-4665-42b8-b040-6b1c57671992_md.jpg',
          price: '$109'
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <h1>DreamHome</h1>
        <hr />
        <Row><Col md="12"><SearchBar /></Col></Row>
        <hr />
        <Row>{this.state.homes.map(e => <Col md="4"><HomeCard key={e.id} image={e.img} title={e.title} price={e.price} /></Col>)}</Row>
      </Container>
    );
  }
}

export default App;
