/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ {
            protocol: 'https',
            hostname: 'img.buymeacoffee.com',
            port: '',
          }]
    }
};

module.exports = nextConfig;
