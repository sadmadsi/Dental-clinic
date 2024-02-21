import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { Icon } from "leaflet";

const vectorIcon = new Icon({
  iconUrl: "/Vector.svg",
  iconSize: [35, 35], // size of the icon
});

const Map: React.FC<any> = () => {
  return (
    <div id="location">
      <MapContainer
        center={[35.796342, 51.444125]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "300px" }}
      >
        <TileLayer
          className="grayscale"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.796342, 51.444125]} icon={vectorIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
