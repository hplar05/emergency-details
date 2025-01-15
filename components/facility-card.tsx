import { Phone, Mail, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Facility } from "../types/facility";

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          {facility.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
          <p>{facility.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
          <a href={`tel:${facility.phone}`} className="hover:underline">
            {facility.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
          <a
            href={`mailto:${facility.email}`}
            className="break-all hover:underline"
          >
            {facility.email}
          </a>
        </div>
        <div className="mt-2">
          <h4 className="mb-2 font-semibold">Available Facilities:</h4>
          <ul className="grid gap-1 text-sm">
            {facility.facilities.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                • {f}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
