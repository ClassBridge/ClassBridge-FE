import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Markers from "./Markers";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!;

export default function Maps() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={MAP_ID}
        defaultCenter={{ lat: 37.551891, lng: 126.991794 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        className="w-[940px] h-[500px] hidden"
        id="map"
      >
        <Markers />
      </Map>
    </APIProvider>
  );
}
