"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, RefreshCw } from "lucide-react";
import { Map } from "./Map";
import { punturinCenter } from "../../data/punturinData";

export function LocationTracker() {
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getLocation = useCallback(() => {
    setIsLoading(true);
    setError(null);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(
            `Unable to retrieve your location. Please enable location services. ${error} `
          );
          setIsLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <Card className="border-2 border-green-100">
      <CardContent className="p-6">
        {isLoading ? (
          <div className="flex items-center justify-center p-6 text-green-700">
            <Loader2 className="h-6 w-6 animate-spin mr-3" />
            <span>Getting your location...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
            <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        ) : location ? (
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Your Current Location
              </h3>
              <div className="space-y-2 text-green-700">
                <p className="flex justify-between">
                  <span>Latitude:</span>
                  <span className="font-mono">{location.lat.toFixed(6)}°</span>
                </p>
                <p className="flex justify-between">
                  <span>Longitude:</span>
                  <span className="font-mono">{location.lng.toFixed(6)}°</span>
                </p>
              </div>
            </div>
            <Map
              centerLocation={
                punturinCenter.coordinates as google.maps.LatLngLiteral
              }
              userLocation={location}
            />
            <Button
              onClick={getLocation}
              variant="outline"
              className="w-full flex items-center justify-center border-green-200 text-green-700 hover:bg-green-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Location
            </Button>
          </div>
        ) : (
          <Button
            onClick={getLocation}
            variant="outline"
            className="w-full flex items-center justify-center border-green-200 text-green-700 hover:bg-green-50"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Get Location
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
