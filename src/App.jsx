import { useLoadScript } from "@react-google-maps/api";
import "./App.css";
import Map from "./google-map/map";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDpb3E0DazmzFWmuybM77oi-Lm_C9Jal2k",
    // googleMapsApiKey: "AIzaSyAM-Q69B72A3OjmUbRa1b1Zkf3lsed_BPU",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Map />
    </>
  );
}

export default App;
