export default {
  title: "Team",
  name: 'team',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    },
    {
      title: "Job Title",
      name: "jobTitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ]
}