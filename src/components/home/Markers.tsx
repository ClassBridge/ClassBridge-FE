"use client";

import { useCallback, useState } from "react";
import {
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import COLORS from "@/constants/colors";

export type Marker = {
  id: string;
  location: google.maps.LatLngLiteral;
  title: string;
  address: string;
};

const markers: Marker[] = [
  {
    id: "fadjfhslhd",
    location: { lat: 37.555946, lng: 126.972317 },
    title: "나만의 향초 만들기",
    address: "서울특별시 서울역",
  },
  {
    id: "fadjfdslhd",
    location: { lat: 37.497905, lng: 127.027578 },
    title: "수제 초콜릿 만들기",
    address: "서울특별시 강남",
  },
];

const Marker = ({ marker }: { marker: Marker }) => {
  const [markerRef, markerAnchor] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <AdvancedMarker
      position={marker.location}
      ref={markerRef}
      onClick={handleMarkerClick}
    >
      <Pin
        background={COLORS.primary.DEFAULT}
        glyphColor={COLORS.point.DEFAULT}
        borderColor={COLORS.point.DEFAULT}
      />
      {infoWindowShown && (
        <InfoWindow
          anchor={markerAnchor}
          onClose={handleClose}
          headerContent={marker.title}
          className="text-xs"
        >
          {marker.address}
        </InfoWindow>
      )}
    </AdvancedMarker>
  );
};

export default function Markers() {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker.id} marker={marker} />
      ))}
    </>
  );
}
