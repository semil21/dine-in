export const addNewRestaurantModal = {
  heading: "Add New Restaurant",
  formFields: [
    {
      type: "text",
      placeholder: "Enter restaurant name",
      required: true,
      name: "name",
    },
    {
      type: "textarea",
      placeholder: "Enter restaurant adress",
      required: true,
      name: "address",
    },
    {
      type: "text",
      placeholder: "Enter restaurant area",
      required: true,
      name: "area",
    },
    {
      type: "text",
      placeholder: "Enter restaurant city",
      required: true,
      name: "city",
    },
    {
      type: "text",
      placeholder: "Enter restaurant state",
      required: true,
      name: "state",
    },
    {
      type: "text",
      placeholder: "Enter restaurant email",
      required: true,
      name: "email",
    },

    {
      type: "number",
      placeholder: "Enter restaurant contact",
      required: true,
      name: "contact",
    },
    {
      type: "number",
      placeholder: "Enter restaurant alternateContact",
      required: false,
      name: "alternateContact",
    },
    {
      type: "text",
      placeholder: "Enter restaurant GST number",
      required: true,
      name: "gst",
    },
  ],
};
