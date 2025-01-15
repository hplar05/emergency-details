"use client";

import { useState } from "react";
import { Building } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmergencyDialog } from "./emergency-dialog";
import { EmergencyCenter } from "../types/emergency";

interface EmergencyCardProps {
  center: EmergencyCenter;
}

export function EmergencyCard({ center }: EmergencyCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="hover:bg-accent/50 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            {center.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            {center.location}
          </p>
          <Button onClick={() => setDialogOpen(true)} className="w-full">
            View Emergency Contacts
          </Button>
        </CardContent>
      </Card>
      <EmergencyDialog
        center={center}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
