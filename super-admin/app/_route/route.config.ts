import { RouteItem } from "../_types/routes.tye";

export const authorizedRoutes: RouteItem[] = [
  {
    path: "/dashboard/restaurant",
    label: "restaurant",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/category",
    label: "category",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/item",
    label: "item",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/item-variation",
    label: "item-variation",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/staff",
    label: "staff",
    allowedRoles: ["super-admin"],
  },
  {
    path: "/table",
    label: "table",
    allowedRoles: ["super-admin", "manager"],
  },
  {
    path: "/table reservation",
    label: "table reservation",
    allowedRoles: ["super-admin", "manager"],
  },
  {
    path: "/payment",
    label: "payment",
    allowedRoles: ["super-admin", "manager"],
  },
  {
    path: "/new-order",
    label: "new-order",
    allowedRoles: ["super-admin", "manager", "waiter"],
  },
  {
    path: "/order-detail",
    label: "order-detail",
    allowedRoles: ["super-admin", "manager", "waiter"],
  },
  {
    path: "/order-checkout",
    label: "order-checkout",
    allowedRoles: ["super-admin", "manager", "waiter"],
  },
];
