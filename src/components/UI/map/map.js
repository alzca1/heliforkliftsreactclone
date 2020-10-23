import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { googleKey } from "./apiKey";
import CustomInfoWindow from '../customInfoWindow/customInfoWindow'
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

  onToggleDirectionsPopOver = () => {
    const { directionsPopOver } = this.state;

    !directionsPopOver
      ? this.setState({ directionsPopOver: true })
      : this.setState({ directionsPopOver: false });
  };

  mapWasClicked = () => {
    console.log("clicked");
  };

  render() {
    // const reducedPopOver = (
    //   <div className="reducedInfoWindow">
    //     <a href={viewMapURL} rel="noopener noreferrer" target="_blank">
    //       View Larger Map
    //     </a>
    //   </div>
    // );

    // let popOver = null;

    // if (this.state.directionsPopOver) {
    //   popOver = (
    //     <div className="popOverWrapper">
    //       <div className="directionsPopOver">
    //         <div className="popOverContent">
    //           Get directions to this location on Google Maps
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <CustomInfoWindow toggleDirectionsPopOver={this.onToggleDirectionsPopOver} />
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
