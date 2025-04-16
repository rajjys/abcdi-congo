/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },eslint: {
    rules: {
      'react/no-unescaped-entities': 'off', // Disable the rule globally
    },
  },
};

export default nextConfig;
