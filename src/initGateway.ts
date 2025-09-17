import {fastifyHttpProxy} from "@fastify/http-proxy";
import type {FastifyInstance} from "fastify";

export async function initGateway(fastify:FastifyInstance){
    fastify.register(fastifyHttpProxy, {
       upstream: 'http://138.118.105.246:3001',
       prefix: '/api/v1/',
       rewritePrefix: '/api/v1/'
    });
    console.log("Proxy iniciado");
}