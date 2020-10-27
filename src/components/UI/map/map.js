import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CustomInfoWindow from "../customInfoWindow/customInfoWindow";
import "./map.css";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    directionsPopOver: false,
    mapWasClicked: false,
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

  onToggleDirectionsPopOver = () => {
    const { directionsPopOver } = this.state;

    !directionsPopOver
      ? this.setState({ directionsPopOver: true })
      : this.setState({ directionsPopOver: false });
  };

  setMapWasClicked = () => {
    this.setState({ mapWasClicked: true });
  };

  render() {
    return (
      <div>
        <CustomInfoWindow
          toggleDirectionsPopOver={this.onToggleDirectionsPopOver}
          mapClicked={this.state.mapWasClicked}
        />
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
          onClick={this.setMapWasClicked}
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
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
