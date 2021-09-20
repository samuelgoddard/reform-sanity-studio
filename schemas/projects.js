export default {
  title: "Projects",
  name: 'projects',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Year",
      name: "year",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Expertises',
      name: 'expertises',
      type: 'reference',
      to: [{type: 'expertises'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          description: "The image gallery for this project, the first image will be used as the 'teaser' image when referencing this project elsewhere on the site.",
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}