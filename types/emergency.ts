export interface EmergencyCenter {
    id: string
    name: string
    location: string
    phone: string[]
    email: string
    facilities: string[]
    coordinates?: {
      lat: number
      lng: number
    }
  }
  
  export interface UserLocation {
    latitude: number
    longitude: number
    error?: string
  }
  
  