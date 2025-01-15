import { EmergencyCard } from "../../components/emergency-card";
import { LocationTracker } from "../../components/location-tracker";
import { EmergencyCenter } from "../../types/emergency";

const emergencyCenters: EmergencyCenter[] = [
  {
    id: "pulo",
    name: "3S Center Pulo",
    location: "Brgy. Pulo",
    phone: ["8294 7637"],
    email: "pulo.valenzuelacity@gmail.com",
    facilities: [
      "Barangay Office",
      "SK Office",
      "ALS Center",
      "Multi-purpose Hall",
    ],
  },
  {
    id: "punturin",
    name: "3S Center Punturin",
    location: "Brgy. Punturin",
    phone: ["8236 0246"],
    email: "punturin2021.valenzuelacity@gmail.com",
    facilities: [
      "Barangay Office",
      "Health Center",
      "Police Sub-station",
      "Fire Sub-station",
      "Rescue Satellite Center",
    ],
  },
  {
    id: "lawang-bato",
    name: "3S Center Lawang Bato",
    location: "Brgy. Lawang Bato",
    phone: ["8719 5546", "8445 6007"],
    email: "lawangbato.valenzuelacity@gmail.com",
    facilities: [
      "Health Center",
      "Police Community Precinct",
      "Traffic Management Office",
      "Lying-in Clinic",
      "Multi-purpose Hall",
    ],
  },
  {
    id: "bignay",
    name: "3S Center Bignay",
    location: "Disiplina Village, Brgy. Bignay",
    phone: ["8294 4640"],
    email: "bignay.valenzuela@gmail.com",
    facilities: [
      "Barangay Office",
      "Police Community Precinct",
      "Fire Sub-station",
      "Health Center",
      "Daycare Center",
      "CSWD Office",
    ],
  },
];

export default function Page() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Emergency Centers</h1>
      <div className="mb-6">
        <LocationTracker />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {emergencyCenters.map((center) => (
          <EmergencyCard key={center.id} center={center} />
        ))}
      </div>
    </div>
  );
}
