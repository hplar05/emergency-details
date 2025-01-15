"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EmergencyCenter } from "../types/emergency";

interface EmergencyDialogProps {
  center: EmergencyCenter;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EmergencyDialog({
  center,
  open,
  onOpenChange,
}: EmergencyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{center.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{center.location}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold">Emergency Hotlines:</span>
            </div>
            <div className="ml-6 space-y-2">
              {center.phone.map((number, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href={`tel:${number.replace(/\s/g, "")}`}>{number}</a>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a
              href={`mailto:${center.email}`}
              className="text-primary hover:underline"
            >
              {center.email}
            </a>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Available Facilities:</h4>
            <ul className="ml-4 space-y-1">
              {center.facilities.map((facility, index) => (
                <li key={index}>• {facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
