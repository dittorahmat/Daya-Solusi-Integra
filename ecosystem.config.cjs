module.exports = {
  apps: [
    {
      name: 'dsi-portfolio',
      script: 'dist/server.cjs',
      instances: 'max',       // Utilizes all CPU cores in cluster mode
      exec_mode: 'cluster',   // Runs in cluster mode for zero-downtime reloads
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
