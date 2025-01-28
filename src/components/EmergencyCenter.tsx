"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Phone, MapPin, Mail } from "lucide-react";

import { LocationTracker } from "./LocationTracker";
import { Map } from "./Map";
import { punturinCenter } from "../../data/punturinData";

export function EmergencyCenter() {
  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden border-2 border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <CardTitle className="flex items-center justify-center text-3xl font-bold">
          <AlertCircle className="mr-3 h-8 w-8" />
          Punturin 3S Center
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 p-2 bg-gray-50 gap-2">
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-red-100 data-[state=active]:text-red-700 py-3"
            >
              <Phone className="mr-2 h-4 w-4" />
              Center Info
            </TabsTrigger>
            <TabsTrigger
              value="map"
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 py-3"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Center Location
            </TabsTrigger>
            <TabsTrigger
              value="location"
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700 py-3"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Your Location
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="p-4">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    {punturinCenter.name}
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-gray-600">{punturinCenter.location}</p>
                  <a
                    href={`tel:${punturinCenter.contact}`}
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {punturinCenter.contact}
                  </a>
                  <a
                    href={`mailto:${punturinCenter.email}`}
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {punturinCenter.email}
                  </a>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">
                      Available Facilities:
                    </h4>
                    <ul className="list-disc list-inside">
                      {punturinCenter.facilities.map((facility, index) => (
                        <li key={index} className="text-gray-600">
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="map" className="p-4">
            <Card>
              <CardContent className="p-0">
                <Map
                  centerLocation={
                    punturinCenter.coordinates as google.maps.LatLngLiteral
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="location" className="p-4">
            <LocationTracker />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
