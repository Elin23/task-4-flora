import type { building } from "../types/building";

export function getInfoBoxData(box: building) {
  return [
    {
      label: "Location",
      value: box.location,
      icon: "/task-4-flora/assets/icons/location.svg",
      alt: "location"
    },
    {
      label: "Price",
      value: box.price,
      icon: "/task-4-flora/assets/icons/dollar-circle.svg",
      alt: "price"
    },
    {
      label: "Type of Property",
      value: box.typeOfProperty,
      icon: "/task-4-flora/assets/icons/house.svg",
      alt: "house"
    }
  ];
}
