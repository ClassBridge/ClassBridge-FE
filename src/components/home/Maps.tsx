import { APIProvider, Map } from "@vis.gl/react-google-maps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

export default function Maps() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{ lat: 37.551891, lng: 126.991794 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        className="w-[940px] h-[500px] hidden"
        id="map"
      />
    </APIProvider>
  );
}
