import { RestaurantType } from "@/app/_types/restaurant.type";

export const restaurantTableColumns: {
  key: keyof RestaurantType;
  value: string;
}[] = [
  {
    key: "name",
    value: "Restaurant",
  },
  {
    key: "address",
    value: "Address",
  },
  {
    key: "area",
    value: "Area",
  },

  {
    key: "city",
    value: "City",
  },
  {
    key: "state",
    value: "State",
  },
  {
    key: "email",
    value: "Email",
  },

  {
    key: "contact",
    value: "Contact",
  },
  {
    key: "alternateContact",
    value: "Alt Contact",
  },

  {
    key: "gst",
    value: "GST",
  },
  {
    key: "status",
    value: "Status",
  },
];
