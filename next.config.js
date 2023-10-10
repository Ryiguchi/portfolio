/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = {};

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        NEXTAUTH_URL: 'http://localhost:3000',
        BASE_URL: 'http://localhost:3000',
      },
    };
  }

  return {
    env: {
      NEXTAUTH_URL: 'http://localhost:3000',
      BASE_URL: 'https://ryaniguchi.com',
    },
  };
};
