import type {FastifyInstance} from "fastify";
import cors from '@fastify/cors';
import {fastifyRedis} from "@fastify/redis";
export async function registerPlugins(fastify: FastifyInstance){
    await fastify.register(fastifyRedis, {
        url: "redis://localhost:6379"
    });
    console.log("Redis iniciado correctamente");

    await fastify.register(cors, {
            origin: '*',
            methods: ["POST", "PUT", "GET", "PATCH", "DELETE", "OPTIONS"]
    });
}