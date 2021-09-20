export default {
  title: 'About',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      // validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Mission',
      name: 'ourMission',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Team',
      name: 'ourTeam',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Supporting Image',
      name: 'supportingImage',
      type: 'image',
      description: 'The image that appears just before the footer.',
      // validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
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