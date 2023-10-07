/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = {};

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'this_is_a_super_long_secret_password_for_next_auth',
      },
    };
  }

  return {
    env: {
      NEXTAUTH_URL: 'http://localhost:3000',
      NEXTAUTH_SECRET: 'this_is_a_super_long_secret_password_for_next_auth',
    },
  };
};
