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
  ]
}