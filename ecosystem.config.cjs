module.exports = {
  apps: [
    {
      name: 'dsi-portfolio',
      script: 'dist/server.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
