import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { googleKey } from "./apiKey";
import "./map.css";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    directionsPopOver: false,
    
  };

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  toggleDirectionsPopOver = () => {
    const { directionsPopOver } = this.state;

    !directionsPopOver
      ? this.setState({ directionsPopOver: true })
      : this.setState({ directionsPopOver: false });
  };

  mapWasClicked = () => {
    console.log("clicked")
  }

  render() {
    let popOver = null;
    const viewMapURL =  "https://www.google.com/maps?ll=-38.010837,145.210236&z=14&t=m&hl=en&gl=AU&mapclient=embed&q=25+Zilla+Ct+Dandenong+South+VIC+3175";
    const infoDirectionsURL = "https://www.google.com/maps?ll=-38.010837,145.210236&z=14&t=m&hl=en&gl=AU&mapclient=embed&daddr=25+Zilla+Ct+Dandenong+South+VIC+3175@-38.010837,145.210236"
    if (this.state.directionsPopOver) {
      popOver = (
        <div className="popOverWrapper">
          <div className="directionsPopOver">
            <div className="popOverContent">
              Get directions to this location on Google Maps
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="infoWindow">
          {popOver}
          <div className="infoAddress">
            <h5>25 Zilla Ct</h5>
            <span>25 Zilla CT, Dandenong South VIC</span>
            <span>3175</span>
            <a
              href={viewMapURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Larger Map
            </a>
          </div>
          <div className="infoDirections">
            <a
              href={infoDirectionsURL}
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={this.toggleDirectionsPopOver}
              onMouseLeave={this.toggleDirectionsPopOver}
            >
              <i class="fas fa-directions"></i>
              <span>Directions</span>
            </a>
          </div>
        </div>
        <Map
          google={this.props.google}
          zoom={14}
          className="map"
          initialCenter={{
            lat: -38.010837,
            lng: 145.210236,
          }}
          disableDefaultUI={true}
          zoomControl={true}
          onClick={this.mapWasClicked}
        >
          <Marker
            onMouseover={this.onMarkerClick}
            name={"Heli Forklifts Victoria"}
            onMouseLeave={this.onClose}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="markerInfoWindow">
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleKey,
})(MapContainer);
