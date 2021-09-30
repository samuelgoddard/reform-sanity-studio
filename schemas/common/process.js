export default {
  title: 'Process',
  name: 'process',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Title of this part of the process, eg: "Preperation & Brief"',
      validation: Rule => Rule.required()
    }
    // {
    //   title: 'Description',
    //   name: 'description',
    //   type: 'text',
    //   description: 'The hidden text that will expand when clicked this process item is clicked.',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Supporting Image',
    //   name: 'supportingImage',
    //   type: 'image',
    //   description: 'The supporting image for this process item.',
    //   validation: Rule => Rule.required()
    // }
  ]
}