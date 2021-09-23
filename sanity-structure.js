import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiSmile,
  FiTool,
  FiMail,
  FiCamera,
  FiUsers,
  FiBook
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiSmile),
      S.divider(),
      S.listItem().title('Team').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
      S.divider(),
      S.listItem().title('Expertises').child(S.documentTypeList('expertises').title('Expertises')).icon(FiTool),
      S.divider(),
      S.listItem().title('Projects').child(S.documentTypeList('projects').title('Projects')).icon(FiCamera),
      S.divider(),
      S.listItem().title('Journal').child(S.documentTypeList('journal').title('Journal')).icon(FiBook),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail),
    ]);