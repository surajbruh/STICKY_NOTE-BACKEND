import redisClient from "../config/redis.config.js";

export const redisSafe = {
    async get(key) {
        try {
            return await redisClient.get(key)
        } catch (error) {
            console.warn(`⚠️ Redis GET failed: ${error.message}`);
            return null; // fallback
        }
    },

    async setEx(key, ttl, value) {
        try {
            return await redisClient.setEx(key, ttl, value)
        } catch (error) {
            console.warn(`⚠️ Redis SETEX failed: ${error.message}`);
        }
    },

    async del(key) {
        try {
            await redisClient.del(key)
        } catch (error) {
            console.warn(`⚠️ Redis DEL failed: ${error.message}`);
        }
    }
}