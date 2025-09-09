import { DriverStore, LocationStore, MarkerData } from "@/types/type";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
  destinationAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  userAddress: null,
  userLatitude: null,
  userLongitude: null,
  setDestinationLocation({ latitude, longitude, address }) {
    set(() => ({
      destinationAddress: address,
      destinationLatitude: latitude,
      destinationLongitude: longitude,
    }));
  },
  setUserLocation({ latitude, longitude, address }) {
    set(() => ({
      userAddress: address,
      userLatitude: latitude,
      userLongitude: longitude,
    }));
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) =>
    set(() => ({ selectedDriver: driverId })),
  setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
