const gateway = require('fast-gateway');
// const jwt = require('jsonwebtoken');
const port = 3000;

const gatewayConfig = {

  routes: [
    {
      prefix: '/products',
      target: 'http://localhost:3002',
    },
    
  ]
};

const server = gateway(gatewayConfig);


server.start(port)
  .then(() => { console.log(`Gateway service started at port ${port}`) });
