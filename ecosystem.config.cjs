module.exports = {
    apps: [
      {
        name: 'vite-preview',
        script: 'npx',
        args: 'vite preview --port 8881 --host 0.0.0.0',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };