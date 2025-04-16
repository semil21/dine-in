import { RouteItem } from "../_types/routes.tye";

export const authorizedRoutes: RouteItem[] = [
  {
    path: "/restaurant",
    label: "Restaurant",
    allowedRoles: ["super-admin"],
  },
  { path: "/category", label: "Category", allowedRoles: ["super-admin"] },
  { path: "/item", label: "Item", allowedRoles: ["super-admin"] },
  {
    path: "/item-variation",
    label: "Item Variation",
    allowedRoles: ["super-admin"],
  },
  { path: "/table", label: "Table", allowedRoles: ["super-admin"] },
  {
    path: "/table-reservation",
    label: "Table Reservation",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/new-order",
    label: "New Order",
    allowedRoles: ["super-admin", "manager", "waiter"],
  },
  {
    path: "/order-detail",
    label: "Order Detail",
    allowedRoles: ["super-admin", "manager", "waiter"],
  },
  {
    path: "/order-checkout",
    label: "Order Checkout",
    allowedRoles: ["super-admin", "manager"],
  },
  {
    path: "/payment",
    label: "Payment",
    allowedRoles: ["super-admin", "manager"],
  },
];
