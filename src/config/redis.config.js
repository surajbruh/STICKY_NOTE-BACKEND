import "dotenv/config"
import { createClient } from 'redis';

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-19423.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 19423
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err));
export default redisClient