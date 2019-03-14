import React from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

const Div = styled.div`
    height: 100%;
    width: 100%;
`;

const Section = styled.section`
    background-color: white;
    // border-bottom: 1px solid #cddae2;
    display: block;
    height: 300px;
    margin-top: 30px;
    max-width: 400px;
    right: 0;
    padding: 2px;
    position: absolute;
    width: 95%;

    @media (min-width: 900px) {
        width: 90%;
    }

    @media (min-width: 1000px) {
        height: 400px;
        width: 85%;
    }
`;

mapboxgl.accessToken = 'pk.eyJ1IjoiYzg3IiwiYSI6ImNqZnR3dDZjZTBvbTgzM3FqODFkbXZ4dG0ifQ.Ne6rpL8cTSNK1yIV_nW5Bg';

 

class Map extends React.Component {
  map;

  constructor(props) {
    super(props);
    this.state = {
      businesses: props.coordinates
    };
  }

  componentDidMount() {
    let center = [
        this.props.coordinates[0] === null ? -115.164766837504 : this.props.coordinates[0].longitude,
        this.props.coordinates[0] === null ? 36.1315942123034 : this.props.coordinates[0].latitude
    ];
    this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center,
        zoom: 11
    });

    // let businesses = this.state.businesses;

    // this.map.on('load', businesses => {
    //   this.map.addSource('countries', {
    //     type: 'geojson',
    //     businesses
    //   });

    //   this.map.addLayer({
    //     id: 'countries',
    //     type: 'fill',
    //     source: 'countries'
    //   }, 'country-label-lg'); // ID metches `mapbox/streets-v9`
    // });
  }

  render() {
      return  (
          <Section>
              <Div ref={el => this.mapContainer = el} />
          </Section>
      )
  }
}

export default Map;