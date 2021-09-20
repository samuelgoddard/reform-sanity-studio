export default {
  title: "Expertises",
  name: 'expertises',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image"
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      title: "Intro Text",
      name: "introText",
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Process",
      name: "process",
      type: 'array', 
      description: 'The blocks that lay out the process of this experise.',
      of: [{type: 'process'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Process Image",
      name: "processImage",
      type: 'image'
    },
    {
      title: "Supporting Image",
      name: "supportingImage",
      description: 'The image that appears just before the footer.',
      type: 'image'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}