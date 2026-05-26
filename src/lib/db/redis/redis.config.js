import Redis from 'ioredis';

export const redis = new Redis(process.env.REDIS_URL);

redis.on('ready', () => {
  console.log('[redis] ready');
});

redis.on('error', (err) => {
  console.error('[redis] error', err);
});
