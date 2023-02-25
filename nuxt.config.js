export default {
  ssr: false,
  buildModules: [
    '@nuxt/image',
  ],
  image: {
    imgix: {
      baseURL: "https://assets.imgix.net"
    }
  },
}

