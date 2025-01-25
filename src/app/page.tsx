import { EmergencyCenter } from "../components/EmergencyCenter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-8">
          <h1 className="text-4xl font-bold text-red-800">
            Punturin 3S Center
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick access to Punturin 3S Center information, location, and
            emergency services. Your safety is our top priority.
          </p>
        </div>
        <EmergencyCenter />
      </main>
    </div>
  );
}
