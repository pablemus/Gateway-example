import {fastifyHttpProxy} from "@fastify/http-proxy";
import type {FastifyInstance} from "fastify";
import {configDotenv} from "dotenv";
configDotenv();

const microServices = [
    {upstream: String(process.env.MONOLITH_URL), prefix:"/api/v1/", rewritePrefix: "/api/v1/"}
];

export async function initGateway(fastify:FastifyInstance){
    for (let microService of microServices){
       await fastify.register(fastifyHttpProxy, microService);
    }
    console.log("Proxy iniciado");
}