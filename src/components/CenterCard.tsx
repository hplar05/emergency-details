"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Facility {
  name: string;
}

interface CenterCardProps {
  name: string;
  contact: string;
  email: string;
  location: string;
  facilities: Facility[];
}

export function CenterCard({
  name,
  contact,
  email,
  location,
  facilities,
}: CenterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-blue-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <a
            href={`tel:${contact}`}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Phone className="w-4 h-4 mr-2" />
            {contact}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center text-blue-600 hover:text-blue-800 break-all"
          >
            <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
            {email}
          </a>
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-red-500" />
            <span>{location}</span>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold mb-2">Available Facilities:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {facilities.map((facility) => {
                    return (
                      <div
                        key={facility.name}
                        className="flex items-center p-2 bg-gray-50 rounded-md"
                      >
                        <span className="text-sm">{facility.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
