export default {
  title: "Journal",
  name: 'journal',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Publish Date",
      description: "Press the button to the right to pick a date.",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Meta Type",
      description: "A short meta description of what this journal entry is about, eg: 'Project Update'",
      name: "metaType",
      type: "string",
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
          description: "The image gallery for this journal entry, the amount will define the type of layout used.",
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
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}