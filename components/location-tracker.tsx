"use client";

import { useEffect, useState } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserLocation } from "../types/emergency";

export function LocationTracker() {
  const [location, setLocation] = useState<UserLocation | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: 0,
        longitude: 0,
        error: "Geolocation is not supported by your browser",
      });
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setLocation({
          latitude: 0,
          longitude: 0,
          error: "Unable to retrieve your location",
        });
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  if (!location) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Getting your location...</span>
      </div>
    );
  }

  if (location.error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{location.error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert>
      <MapPin className="h-4 w-4" />
      <AlertDescription>
        Your location: {location.latitude.toFixed(6)},{" "}
        {location.longitude.toFixed(6)}
      </AlertDescription>
    </Alert>
  );
}
