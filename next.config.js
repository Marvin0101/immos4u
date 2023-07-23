/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['images.unsplash.com', 'localhost', 'picsum.photos', 'pictures.immobilienscout24.de'] // <== Domain name
  }
}

module.exports = nextConfig
