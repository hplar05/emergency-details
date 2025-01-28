"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  centerLocation: google.maps.LatLngLiteral;
  userLocation?: google.maps.LatLngLiteral | null;
}

export function Map({ centerLocation, userLocation }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = (await loader.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;

      const mapOptions: google.maps.MapOptions = {
        center: centerLocation,
        zoom: 15,
      };

      const newMap = new Map(mapRef.current as HTMLElement, mapOptions);
      setMap(newMap);

      new google.maps.Marker({
        position: centerLocation,
        map: newMap,
        title: "3S Center Punturin",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new google.maps.Size(40, 40),
        },
      });
    };

    initMap();
  }, [centerLocation]);

  useEffect(() => {
    if (map && userLocation) {
      new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(centerLocation));
      bounds.extend(new google.maps.LatLng(userLocation));
      map.fitBounds(bounds);
    }
  }, [map, userLocation, centerLocation]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
