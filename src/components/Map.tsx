"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  center: { lat: number; lng: number };
}

export function Map({ center }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const map = new Map(mapRef.current as HTMLElement, {
        center,
        zoom: 15,
      });

      new google.maps.Marker({
        position: center,
        map: map,
        title: "3S Center Punturin",
      });
    };

    initMap();
  }, [center]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }} />;
}
