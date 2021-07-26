
// pm2 configuration ecosystem
module.exports = {
  apps: {
    name: 'NuxtBoilerplate',
    exec_mode: 'cluster',
    instances: 'max',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
  },
};
