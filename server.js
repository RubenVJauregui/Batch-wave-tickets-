const path = require('path');
const fs = require('fs');
const fastify = require('fastify')({ logger: true });
const fastifyStatic = require('@fastify/static');

const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');
fs.mkdirSync(publicDir, { recursive: true });

fastify.register(fastifyStatic, { root: publicDir, prefix: '/' });

fastify.get('/health', async () => ({ ok: true }));

fastify.listen({ port: PORT, host: '0.0.0.0' }).catch((err) => {
  fastify.log.error(err);
  process.exit(1);
});
