import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singletonHome from './singletonHome'
import singletonContact from './singletonContact'

import seo from './common/seo'
import process from './common/process'
import team from './team'
import singletonAbout from './singletonAbout'
import projects from './projects'
import expertises from './expertises'
import journal from './journal'
import singletonPrivacy from './singletonPrivacy'
import singletonMenu from './singletonMenu'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    singletonPrivacy,
    singletonMenu,
    team,
    projects,
    expertises,
    journal,
    seo,
    process
  ]),
})
