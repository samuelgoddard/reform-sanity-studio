export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update',  'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address',
      name: 'address',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}