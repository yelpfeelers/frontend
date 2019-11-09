import React from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Div = styled.div`
    height: 100%;
    width: 100%;
`;

const Section = styled.section`
    background-color: white;
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
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.jsonPoints.length > 0) {
      const coordinates = this.props.jsonPoints[0].geometry.coordinates
      this.map.flyTo({center: coordinates, zoom: 11});

      this.map.on('load', () => {
        this.map.addLayer({
          id: 'businesses',
          type: 'circle',
          minzoom: 5,
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: this.props.jsonPoints
            }
          },
          paint: {
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
            'circle-color': '#d32323',
            'circle-radius': {
              stops: [
                [10, 5],
                [15, 10],
              ],
            },
          },
        });
      });
    }
  }

render() {
  return (
    <Section>
      <Div ref={el => this.mapContainer = el} />
    </Section>
  )
}
}

const mapStateToProps = state => ({
  jsonPoints: state.businesses.map(b => ({
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [b.coordinates.longitude, b.coordinates.latitude]
    }
  }))
})

export default connect(mapStateToProps)(Map);