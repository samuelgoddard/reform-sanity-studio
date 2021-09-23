const globalSlugs = {
  home: '/',
  about: '/about',
  journal: '/journal',
  projects: '/projects'
}

const secret = `skpoTwTkcjfqk3c8qour5vVlgQblUWJ5SdaOoYSd6jxNgv32C6wC25LYMZLBo0w21tyY9AjAKI1hallJ2TWQsLIcA8XtnX9EQgRh8bwBu2hsZPUAvQQWsyIfO1bc8WojWZDgrO7KYOMvyz6u3zxRYJzEYBtLOO7ZaPbKy0g5dgefvqxmLgp7`
export const getGlobalSlug = (slug) => globalSlugs[slug]

// TODO: Change remote url
const remoteURL = 'https://reform-2021.vercel.app'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=${secret}&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
